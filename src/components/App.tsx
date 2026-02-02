import {  useState, type JSX } from "react";
import Cards from "./Cards";
import style from "./Styles/App.module.css";
import { _readonly } from "zod/v4/core";

const App = () => {
  const [countTrue, setCountTrue] = useState<number>(0);

  return <>{Game()}</>;
};
function Game(): JSX.Element {
   let list: string[] = [
    "angular.svg",
    "aurelia.svg",
    "ember.svg",
    "backbone.svg",
    "js-badge.svg",
    "react.svg",
    "vue.svg",
    "angular.svg",
    "aurelia.svg",
    "ember.svg",
    "backbone.svg",
    "js-badge.svg",
    "react.svg",
    "vue.svg",
  ];
  let [mainList, setMainList] = useState<string[]>(list);
  const [boliRandom, setBoliRandom] = useState(false);
  const [selectTrueCard, setSelectTrueCard] = useState<[number, number][]>([]);
  const [arrayS, setArrayS] = useState<[number, number]>([-1, -1]);
  const [select1, setSelect1] = useState(-1);
  const [select2, setSelect2] = useState(-1);

  const[countTrue,setCountTrue]=useState(0);

  const [boliWin,setBoliWin]=useState(false);
  const [countLost,setCountLost]=useState(10);
  const [boliLost,setBoliLost]=useState(false);
  const [step,setStep]=useState(1);
  const [maxStep,setMaxStep]=useState(1);




  //style background
  const[colorBackground,setColorBackground]=useState("white");
  if (boliRandom) {
    let randomList = createRandomCard(list, boliRandom, setBoliRandom);
    setMainList(randomList);
    setBoliRandom(false);
    setSelectTrueCard([]);
    setArrayS([-1,-1]);
    setSelect1(-1);
    setSelect2(-1);


  }

 

  // console.log(selectTrueCard.length);
  if(boliWin ||boliLost){
    // if(boliWin){
    //   setMaxStep(step);
    // }else{
    //   setMaxStep(1)
    // }
    return (
      <div style={{
        color:colorBackground==="white"?"white":"rgba(110, 135, 0, 1)",
              background:colorBackground==="white"?"rgb(0, 43, 52)":"white"
            }}  className={[style.body].join(" ")}>
        <div className={[style.resault].join(" ")}>
          <h1 className={[style.textResault].join(" ")}>{boliWin?"you win 😃🎉":"you lost 😜✌"}</h1>
          <button onClick={()=>{
            setCountTrue(0);
            setBoliWin(false);
            setBoliLost(false);
            setCountLost(10);
            let randomList = createRandomCard(list, boliRandom, setBoliRandom);

            setMainList(randomList);
            setBoliRandom(false);
            setSelectTrueCard([]);
            setArrayS([-1,-1]);
            setSelect1(-1);
            setSelect2(-1);
          }} className={["btn",colorBackground!=="white"?"btn-warning":"btn-info",style.buttonReturn].join(" ")}>return to game</button>
        </div>
      </div>
    )

  }
  return (
    <>
      <div  style={{
        color:colorBackground==="white"?"white":"rgba(110, 135, 0, 1)",
              background:colorBackground==="white"?"rgb(0, 43, 52)":"white"
            }} className={[style.body].join(" ")}>


        <div style={{
                marginBottom:"1rem",
              background:colorBackground!=="white"?"rgba(210, 242, 0, 1)":"rgba(3, 91, 86, 1)"
            }}  
            className={[style.header].join(" ")}>
          <div>
            <button onClick={()=>{
              if(colorBackground==="white")
                  setColorBackground("dark");
                else
                  setColorBackground("white");
            }} 


            
            className={["btn",colorBackground!=="white"?"btn-warning":"btn-info",style.buttonH,style.lightButton].join(" ")}>{colorBackground!=="dark"?"light":"dark"}</button>
          </div>
          <h1  className={[style.title].join(" ")}>Game</h1>
          <p></p>
        </div>
        <div className={[style.boxGame].join(" ")}>
          <h2 >{countLost}</h2>
          <button
            className={["btn", colorBackground!=="white"?"btn-warning":"btn-info"].join(" ")}
            onClick={() => {
              setBoliRandom(true);
            }}
          >
            random card
          </button>
          <div>
            {`step : ${step} , max-step : ${maxStep}`}
          </div>
        </div>
        <div className={[style.container].join(" ")}>
          {mainList.map((item, index) => (
            <Cards
              maxStep={maxStep}
              setMaxStep={setMaxStep}
              colorBackground={colorBackground}
              setStep={setStep}
              step={step}
              countLost={countLost}
              setCountLost={setCountLost}
              setBoliLost={setBoliLost}
              key={index}
              boliWin={boliWin}
              mainList={mainList}
              selectTrueCard={selectTrueCard}
              setSelectTrueCard={setSelectTrueCard}
              arrayS={arrayS}
              setArrayS={setArrayS}
              select1={select1}
              setSelect1={setSelect1}
              select2={select2}
              setSelect2={setSelect2}
              index={index}
              nameImg={item}
              setBoliWin={setBoliWin}
              setCountTrue={setCountTrue}
              countTrue={countTrue}
            />
          ))}
        </div>
      </div>
    </>
  );
}
function createRandomCard(
  list: string[],
  boliRandom: boolean,
  setBoliRandom: (item: boolean) => void
): string[] {
  let list1: string[] = [];
  let list2: string[] = [];
  let i = 0;
  while (list1.length < 7) {
    let num = Math.round(Math.random() * 7);
    if (num < 7 && !list1.includes(list[num])) list1[i++] = list[num];
  }
  i = 0;
  while (list2.length < 7) {
    let num = Math.round(Math.random() * 7);
    if (num < 7 && !list2.includes(list[num])) list2[i++] = list[num];
  }
  console.log([...list1, ...list2]);
  return [...list1, ...list2];
}
export default App;
