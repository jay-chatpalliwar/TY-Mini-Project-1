import { useState, useEffect } from "react";
import Message from "./message";
import Text from "./text";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../Slices/replySlice";

export default function Forum(props) {
  const value = useSelector((state) => state.reply.value);
  const data = useSelector((state) => state.reply.data);
  const dispatch = useDispatch();
  console.log(data)
  return (
    <div className="relative h-screen w-screen">
      <div className="flex flex-col h-screen w-full justify-between relative py-4 overflow-hidden right-0">
        <Message user={props.user}/>
        <Text user={props.user} />
      </div>
      {value === true && (
        <div
          onClick={() => dispatch(change())}
          className=" absolute z-40 h-full w-full top-0 flex justify-center items-center"
        >
          Thread is now open 
          {/* {value.payload.name} */}
        </div>
      )}
    </div>
  );
}
