
interface Topic {
    topic: string,
    isOrphaned: boolean
};

type Note = {
    timestamp: Date,
    topic: Topic,
    summary: string,
};

export default Note;