import { useContext, createContext, useState, ReactElement } from "react";

type Topic = {
  topic: string,
  setTopic: (newTopic: string) => {}
}

const defaultTopic = {topic: "Orphaned", setTopic: (newTopic: string) => {}} as Topic;

const TopicContext = createContext(defaultTopic);

const useTopics = () => useContext(TopicContext);

export const TopicContextProvider = (props: { children: ReactElement | ReactElement[] }) => {
  const [topic, setTopic] = useState(defaultTopic.topic);
  
  return(
    <TopicContext.Provider value={{topic: topic, setTopic: (newTopic: string) => { setTopic(newTopic) }} as Topic}>
      {props.children}
    </TopicContext.Provider>
  )
}

export default useTopics;

