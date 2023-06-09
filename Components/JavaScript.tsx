import React, { useState } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { Link } from "react-router-native";
import "./QuestionPage.css";

interface Option {
  id: number;
  text: string;
  selected: boolean;
  isCorrect: boolean;
}

interface QuestionProps {
  question: string;
  answer: boolean;
}
const JavaScript = () => {
  let [score, setScore] = useState(0);
  let [style, setStyle] = useState<string[]>([
    "circle",
    "circle",
    "circle",
    "circle",
    "circle",
  ]);
  let [q1, setQ1] = useState<Boolean>(false);
  let [q2, setQ2] = useState<Boolean>(false);
  let [q3, setQ3] = useState<Boolean>(false);
  let [q4, setQ4] = useState<Boolean>(false);
  let [q5, setQ5] = useState<Boolean>(false);
  let [QuesNum, setQuesNum] = useState(0);
  let [q2Ans, setq2Ans] = useState<string>("");

  // Question 3

  const [items, setItems] = useState([
    { id: 1, text: "toFixed()" },
    { id: 2, text: "parseFloat()" },
    { id: 3, text: "parseInt()" },
  ]);
  const [targets, setTargets] = useState<any>([
    {
      id: 1,
      text: "A. Converts a string to an integer",
      item: "not changed",
      correctAns: "parseInt()",
    },
    {
      id: 2,
      text: "B. Converts a string to a floating-point number",
      item: "",
      correctAns: "parseFloat()",
    },
    {
      id: 3,
      text: "C. Formats a number to a specified number of decimal ",
      item: "",
      correctAns: "toFixed()",
    },
  ]);

  const questions = [
    {
      texts:
        "What will be the output of the following code? console.log(typeof null); ",
      options: [
        { id: 0, text: "null", isCorrect: false },
        { id: 1, text: "undefined", isCorrect: false },
        { id: 2, text: "object", isCorrect: true },
        { id: 3, text: "number", isCorrect: false },
      ],
    },
  ];

  // Question 2

  const question2 = [
    {
      texts: "_______ keyword in the code that is used to define a constant?",
      ans: "const",
    },
  ];
  const handleQuestionNumber = (e: Number) => {
    if (e == 1) {
      setQuesNum(1);
      setQ1(true);
      setQ2(false);
      setQ3(false);
      setQ4(false);
      setQ5(false);
    } else if (e == 2) {
      setQuesNum(2);
      setQ1(false);
      setQ2(true);
      setQ3(false);
      setQ4(false);
      setQ5(false);
    } else if (e == 3) {
      setQuesNum(3);
      setQ1(false);
      setQ2(false);
      setQ3(true);
      setQ4(false);
      setQ5(false);
    } else if (e == 4) {
      setQuesNum(4);
      setQ1(false);
      setQ2(false);
      setQ3(false);
      setQ4(true);
      setQ5(false);
    } else if (e == 5) {
      setQuesNum(5);
      setQ1(false);
      setQ2(false);
      setQ3(false);
      setQ4(false);
      setQ5(true);
    }
  };

  const optionClicked = (isCorrect: boolean) => {
    // Increment the score

    if (isCorrect) {
      setScore(score + 1);
    }
    if (QuesNum === 1) {
      style[0] = "Markedcircle";
    }
    if (QuesNum === 2) {
      style[1] = "Markedcircle";
    }
    if (QuesNum === 3) {
      style[2] = "Markedcircle";
    }
    if (QuesNum === 4) {
      style[3] = "Markedcircle";
    }
    if (QuesNum === 5) {
      style[4] = "Markedcircle";
    }
  };
  const handleFillInTheBlank = (e: React.ChangeEvent<HTMLInputElement>) => {
    setq2Ans(e.target.value);
    style[1] = "Markedcircle";
    if (q2Ans == question2[0].ans) {
      setScore(score + 1);
      console.log(score);
    }
  };
  const handleDragStart = (e: any, itemId: any) => {
    e.dataTransfer.setData("text/plain", itemId);
  };

  const handleDragOver = (e: any, targetId: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any, targetId: any) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData("text");
    const updatedTargets = targets.map((target: any) => {
      if (target.id === targetId) {
        return {
          ...target,
          item: items.find((item) => item.id === Number(itemId)),
        };
      }
      return target;
    });

    setTargets(updatedTargets);
    style[2] = "Markedcircle";
  };
  const handleSubmitQuestion3 = () => {
    let flag = true;
    targets.map((value: any, index: any) => {
      if (value.item.text !== value.correctAns) {
        flag = false;
      }

      return true;
    });
    if (flag) {
      flag = false;
      setScore(score + 1);
    }

    setQuesNum(4);
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(true);
    setQ5(false);
  };
  // QUESTION 4

  const [options, setOptions] = useState<Option[]>([
    { id: 1, text: "A. myVar", selected: false, isCorrect: true },
    { id: 2, text: "B. $myVar", selected: false, isCorrect: true },
    { id: 3, text: "C. _myVar", selected: false, isCorrect: true },
    { id: 4, text: "D. 3myVar", selected: false, isCorrect: false },
  ]);

  const handleOptionSelect = (optionId: number) => {
    const updatedOptions = options.map((option) => {
      if (option.id === optionId) {
        return { ...option, selected: !option.selected };
      }
      return option;
    });
    setOptions(updatedOptions);
    console.log(options);
    style[3] = "Markedcircle";
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedOptions = options.filter((option) => option.selected);
    // console.log("Selected options:", selectedOptions);
    let flag = true;
    selectedOptions.map((value, index) => {
      console.log(value.isCorrect + " ");
      if (value.isCorrect === false) {
        flag = false;
      }
      return true;
    });

    if (flag) {
      setScore(score + 1);
      console.log(score);
      flag = false;
    }
    setQuesNum(5);
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(false);
    setQ5(true);
  };
  // Question 5
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  const handleAnswerSelect = (isTrue: boolean) => {
    setSelectedAnswer(isTrue);
    if (isTrue) {
      setScore(score + 1);
      console.log(score);
    }
    style[4] = "Markedcircle";
  };
  
// Previous Next Button
const nextButtonHandler=(num:any)=>{
  if(num==1){
    setQ1(false);
    setQ2(true);
    setQ3(false);
    setQ4(false);
    setQ5(false);
  }
  if(num==2){
    setQ1(false);
  setQ2(false);
  setQ3(true);
  setQ4(false);
  setQ5(false);
  }
  if(num==3){
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(true);
    setQ5(false);
  }
  if(num==4){
    setQ1(false);
  setQ2(false);
  setQ3(false);
  setQ4(false);
  setQ5(true);
  }
}

const prevButtonHandler=(num:any)=>{
  
  if(num==2){
    setQ1(true);
  setQ2(false);
  setQ3(false);
  setQ4(false);
  setQ5(false);
  }
  if(num==3){
    setQ1(false);
    setQ2(true);
    setQ3(false);
    setQ4(false);
    setQ5(false);
  }
  if(num==4){
    setQ1(false);
  setQ2(false);
  setQ3(true);
  setQ4(false);
  setQ5(false);
  }
  if(num==5){
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(true);
    setQ5(false);
  }
}

  return(
    
         
    <div className="quiz-main" >
      <div className="quiz-title" >JAVASCRIPT QUIZ </div>
      <div className="question-number-show">
        <div className={style[0]} onClick={() => handleQuestionNumber(1)}>
          <p className="text">1</p>
        </div>
        <div className={style[1]} onClick={() => handleQuestionNumber(2)}>
          <p className="text">2</p>
        </div>
        <div className={style[2]} onClick={() => handleQuestionNumber(3)}>
          <p className="text">3</p>
        </div>
        <div className={style[3]} onClick={() => handleQuestionNumber(4)}>
          <p className="text">4</p>
        </div>
        <div className={style[4]} onClick={() => handleQuestionNumber(5)}>
          <p className="text">5</p>
        </div>
      </div>

      <div className="questions-types-main">
        {q1 && (
          <div className="questions" >
            <div>{questions[0].texts}</div>
            <ul>
              {questions[0].options.map((option) => {
                return (
                  <li>
                    <input
                      key={option.id}
                      onClick={() => optionClicked(option.isCorrect)}
                      type="checkbox"
                    />
                    {option.text}
                  </li>
                );
              })}
            </ul>
            <div className="next-prev-buttons" >
              
              <button onClick={()=>nextButtonHandler(1)} >Next</button>
            </div>
          </div>
        )}
        {q2 && (
          <div className="questions" >
            <h4>Fill the Blank</h4>
            <div>{question2[0].texts}</div>
            <input type="text" value={q2Ans} onChange={handleFillInTheBlank} />
            <div className="next-prev-buttons" >
              <button onClick={()=>prevButtonHandler(2)} >Prev</button>
              <button onClick={()=>nextButtonHandler(2)} >Next</button>
            </div>
          </div>
        )}
        {q3 && (
          <div className="questions" >
            <div className="drag-drop-container">
              <div className="drag-drop-semi-container">
                {items.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    className="drag-item"
                    onDragStart={(e) => handleDragStart(e, item.id)}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
              <div className="drag-drop-semi-container">
                {targets.map((target: any) => (
                  <div
                    className="drop-target"
                    key={target.id}
                    onDragOver={(e) => handleDragOver(e, target.id)}
                    onDrop={(e) => handleDrop(e, target.id)}
                  >
                    {target.text}: {target.item ? target.item.text : ""}
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => handleSubmitQuestion3()}>Submit</button>

            <div className="next-prev-buttons" >
              <button onClick={()=>prevButtonHandler(3)} >Prev</button>
              <button onClick={()=>nextButtonHandler(3)} >Next</button>
            </div>
          </div>
        )}
        {q4 && (
          <div className="questions" >
            <form onSubmit={handleSubmit}>
              <div>Which of the following are valid Javascript variable names?</div>
              {options.map((option) => (
                <div key={option.id}>
                  <input
                    type="checkbox"
                    id={option.id.toString()}
                    value={option.id}
                    checked={option.selected}
                    onChange={() => handleOptionSelect(option.id)}
                  />
                  <label htmlFor={option.id.toString()}>{option.text}</label>
                </div>
              ))}
              <button type="submit" >Submit</button>
            </form>

            <div className="next-prev-buttons" >
              <button onClick={()=>prevButtonHandler(4)} >Prev</button>
              <button onClick={()=>nextButtonHandler(4)} >Next</button>
            </div>
          </div>
        )}
        {q5 && 
        
        (
          <div className="questions" >
            <h3>Question: In JavaScript, the "==" operator compares values for equality without checking the data types, while the "===" operator compares values for equality with type coercion.</h3>
            <div>
              <label>
                <input
                  type="radio"
                  value="true"
                  checked={selectedAnswer === true}
                  onChange={() => handleAnswerSelect(true)}
                />
                True
              </label>
              <label>
                <input
                  type="radio"
                  value="false"
                  checked={selectedAnswer === false}
                  onChange={() => handleAnswerSelect(false)}
                />
                False
              </label>

              <div className="next-prev-buttons" >
              <button onClick={()=>prevButtonHandler(5)} >Prev</button>
               
            </div>
            </div>
            <Link to='/ReportCard' state={{state:score}} >
               <button   >Submit The Quiz</button>
            </Link>
          </div>
        )
        }
      </div>
    </div>
 
     
    
  );
};

const styles = StyleSheet.create({
  circle: {
    display: "flex",
    width: 30,
    height: 30,
    marginLeft: 30,
    backgroundColor: "rgb(133, 139, 133)",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgb(99, 96, 96)",
    cursor: "pointer",
  },
  Markedcircle: {
    display: "flex",
    width: 30,
    height: 30,
    marginLeft: 30,
    backgroundColor: "rgb(173, 46, 37)",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgb(198, 65, 29)",
    cursor: "pointer",
  },
  text: {
    margin: "auto",
  },
  questionNumberShow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  dragDropContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dragDropSemiContainer: {
    padding: 20,
  },
  dragItem: {
    padding: 8,
    marginBottom: 20,
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#ddd",
    cursor: "grab",
    transitionProperty: "transform",
    transitionDuration: "0.2s",
    transitionTimingFunction: "ease-in-out",
  },
  dropTarget: {
    padding: 8,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    cursor: "pointer",
    transitionProperty: "background-color",
    transitionDuration: "0.2s",
    transitionTimingFunction: "ease-in-out",
  },
  dropTargetHover: {
    backgroundColor: "#f2f2f2",
  },
  dragItemActive: {
    transform: [{ scale: 1.1 }],
  },
});

export default JavaScript;
