import { createContext, useState } from "react";
import run from "../Config/Gemini";

export const Context = createContext();
const Contextprovider = (props) => {
  const [input, setinput] = useState("");
  const [recentprompt, setrecentprompt] = useState("");
  const [prevPrompt, setprevPrompt] = useState([]);
  const [showResult, setshowResult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setresultData] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // New state for selected image

  const delaypara = (index, nextword) => {
    setTimeout(() => {
      setresultData((prev) => prev + nextword);
    }, 75 * index);
  };

  const newChat = () => {
    setloading(false);
    setshowResult(false);
    setSelectedImage(null); // Clear selected image on new chat
  };

  const onSent = async (prompt, image) => {
    setresultData("");
    setloading(true);
    setshowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await run(prompt, image); // Pass selected image to the run function
      setrecentprompt(prompt);
    } else {
      setprevPrompt((prev) => [
        ...prev,
        { prompt: input, image: selectedImage },
      ]);
      setrecentprompt(input);
      response = await run(input, selectedImage); // Pass selected image to the run function
    }

    let responseArray = response.split("**");
    let newresponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newresponse += responseArray[i];
      } else {
        newresponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newresponse2 = newresponse.split("*").join("</br>");
    let newResponseArray = newresponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delaypara(i, nextWord + " ");
    }
    // Clear both the input and selected image
    setinput("");
    setSelectedImage(null); // Clear the selected image
    setloading(false);
  };
  const contextValue = {
    prevPrompt,
    setprevPrompt,
    onSent,
    setrecentprompt,
    recentprompt,
    showResult,
    loading,
    resultData,
    input,
    setinput,
    newChat,
    selectedImage,
    setSelectedImage,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default Contextprovider;
