import { Moment } from "moment";

class Note {
  private _timeStamp: Moment;
  private _content: string;
  private _topic: string;
  
  public get timeStamp() { return this._timeStamp };
  public get topic() { return this._topic };
  public get content() { return this._content };

  constructor(timestamp: Moment, topic: string, content: string) {
    this._timeStamp=timestamp;
    this._content=content;
    this._topic=topic;
  }

  public isOrphaned = () => this.topic==="Orphaned"

  public adoptNote = (newTopic: string) => this._topic=newTopic;
};

export default Note;