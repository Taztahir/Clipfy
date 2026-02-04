import { create } from 'zustand';

export const useProjectStore = create((set, get) => ({
    // Timeline State
    isPlaying: false,
    currentTime: 0,
    duration: 60, // seconds
    zoomLevel: 1,

    // Project Data
    tracks: [],
    title: "Loading...",
    selectedClipId: null,
    lastSaved: 0, // Timestamp of last save to prevent sync loops

    // Actions
    setProject: (projectData) => {
        const { lastSaved } = get();
        // Skip update if the incoming data is older than our last local save
        if (projectData.lastModified?.seconds && projectData.lastModified.seconds * 1000 <= lastSaved) {
            return;
        }

        set({
            tracks: projectData.tracks || [],
            duration: projectData.duration || 60,
            title: projectData.title || "Untitled Sequence",
            // Don't update lastSaved here, as this is a remote update
        });
    },

    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

    seekTo: (time) => {
        const { duration } = get();
        const newTime = Math.max(0, Math.min(time, duration));
        set({ currentTime: newTime });
    },

    updateDuration: (newDuration) => set({ duration: newDuration }),

    addClip: (trackId, clip) => set((state) => {
        const newTracks = state.tracks.map(track => {
            if (track.id === trackId) {
                return { ...track, clips: [...track.clips, { ...clip, id: `clip-${Math.random().toString(36).substr(2, 5)}` }] };
            }
            return track;
        });
        return { tracks: newTracks, lastSaved: Date.now() };
    }),

    deleteClip: (clipId) => set((state) => {
        const newTracks = state.tracks.map(track => ({
            ...track,
            clips: track.clips.filter(c => c.id !== clipId)
        }));
        return { tracks: newTracks, selectedClipId: null, lastSaved: Date.now() };
    }),

    selectClip: (clipId) => set({ selectedClipId: clipId }),

    // Animation Frame Handler (to be called from component)
    tick: (deltaSeconds) => set((state) => {
        if (!state.isPlaying) return {};
        const newTime = state.currentTime + deltaSeconds;
        if (newTime >= state.duration) {
            return { currentTime: 0, isPlaying: false };
        }
        return { currentTime: newTime };
    })
}));
