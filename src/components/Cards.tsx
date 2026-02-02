import React, { useState } from 'react'
import style from "./Styles/Cards.module.css"
import { tr } from 'zod/v4/locales';
import { number } from 'zod';

interface Props{
  mainList:string[];
  selectTrueCard:[number,number][];
  setSelectTrueCard:(item:[number, number][])=>void;
  nameImg:string;
  index:number;
  select1:number;
  setSelect1:(item:number)=>void;
  select2:number;
  setSelect2:(item:number)=>void;
  arrayS:[number,number];
  setArrayS:(item:[number,number])=>void;
  setBoliWin:(item:boolean)=>void;
  setCountTrue:(item:number)=>void;
  boliWin:boolean;
  countTrue:number;
  countLost:number;
  setCountLost:(item:number)=>void;
  setBoliLost:(item:boolean)=>void;
  setStep:(item:number)=>void;
  step:number;
  colorBackground:string;
  maxStep:number;
  setMaxStep:(item:number)=>void
}

const Cards = ({maxStep,setMaxStep,colorBackground,mainList,selectTrueCard,setSelectTrueCard,nameImg,arrayS,boliWin,
    setArrayS,index,select1,setSelect1,
    select2,setSelect2,setBoliWin,
    countTrue,setCountTrue,
    setCountLost,setBoliLost,countLost,setStep,step}:Props) => {
      
      // if(selectTrueCard.length===7){
      //     setBoliWin(true);
      // } 

  
// rgb(246, 255, 127)
// teal
  return (
    <div style={{background:colorBackground!=="dark"?"teal":"rgb(246, 255, 127)"}} onChange={()=>{
      console.log(selectTrueCard.length)
    }} onClick={()=>{
      //         setCountTrue(countTrue+1);

      
      if(select1===-1 && select2===-1){
        
        
        let boli=true
        A:for(let i=0;i<selectTrueCard.length;i++)
          for(let j=0;j<selectTrueCard[i].length;j++)
            if(selectTrueCard[i][j]===index){
              boli=false;
              break A;
            }

           if(boli){

             setSelect1(index);
             setArrayS([index,-1]);
           } 
        

      }else if(select1 !==-1 && select2 ===-1){
        
        

        
        // console.log("sp2 "+index);
        let boli=true
        A:for(let i=0;i<selectTrueCard.length;i++)
          for(let j=0;j<selectTrueCard[i].length;j++)
            if(selectTrueCard[i][j]===index){
              boli=false;
              break A;
            }

        // console.log(boli);    


        
        if(select1!==index && boli){
          
          setSelect2(index);
          setArrayS([select1,index]);
        }
        
        
      }else if((select1!==-1 && select2!==-1)&&(mainList[select1]===mainList[select2])){
        setSelectTrueCard([...selectTrueCard,[select1,select2]]);
        // console.log(selectTrueCard.length);
        
        
        let boli=true
        A:for(let i=0;i<selectTrueCard.length;i++)
          for(let j=0;j<selectTrueCard[i].length;j++)
            if(selectTrueCard[i][j]===index){
              boli=false;
              break A;
            }
            // if(selectTrueCard.length===6 && (mainList[arrayS[0]]===mainList[arrayS[1]]) ){
            //  setBoliWin(true);
            // } 
            
            if(index!==select1 && index!==select2 && boli){
            // setCountTrue(countTrue+1);
            setArrayS([index,-1]);
            setSelect1(index);
            setSelect2(-1);
          }else{

            setArrayS([-1,-1]);
            setSelect1(-1);
            setSelect2(-1);
            
          }
        

      }else if((select1!==-1 && select2!==-1)&&(mainList[select1]!==mainList[select2])){

        setCountLost(countLost-1);
        if(countLost ===0 ){
          setStep(1);

       setBoliLost(true);
     }

        let boli=true
        A:for(let i=0;i<selectTrueCard.length;i++)
          for(let j=0;j<selectTrueCard[i].length;j++)
            if(selectTrueCard[i][j]===index){
              boli=false;
              break A;
            }

            if(boli){

              setArrayS([index,-1]);
              setSelect1(index);
              setSelect2(-1);

            }else{
              setArrayS([-1,-1]);
              setSelect1(-1);
              setSelect2(-1);
            }

            
          

      }

      if(selectTrueCard.length===6 && mainList[select1]===mainList[index] && index !==select1){
        setBoliWin(true);
        if(step>=maxStep)
          setMaxStep((step+1));
        setStep((step+1));
        }
     console.log(countLost);
      
      
      

      
    }}  className={[style.card].join(" ")}>

      {selectTrueCard.map(item=>(
        <>
          {item.map(i=>(
            <>
              {i===index &&  <img  src={`images-project cards game/${nameImg}`} />}
            </>
          ))}
        </>
      ))}

      {(select1!==-1 || select2!==-1)&& 
      <>
        {arrayS.map((item,i)=>(
          <>
          
            {item===index && <img key={i} src={`images-project cards game/${nameImg}`} />}
          </>
        ))}
      </>}
      
    </div>
  )
}



export default Cards