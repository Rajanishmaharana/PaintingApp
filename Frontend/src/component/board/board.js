import React, { useRef, useEffect } from "react";
import "./board.css";
import Sidemenu from "../sideMenu/Sidemenu";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "font-awesome/css/font-awesome.min.css";
// import { socket } from "../../config/socketConn";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";

function Board(prop) {
  const myInput = useRef();
  let { user } = useParams();
  var prevx,
    prevy,
    curx,
    cury,
    flag = false;
  var canvas, ctx;
  var metadata = {};
  var sideMenuAction = {};

  var getSocketAxis = {};

  useEffect(() => {
    console.log(user);
    canvas = myInput.current;
    ctx = canvas.getContext("2d");

    canvas.addEventListener(
      "mousemove",
      function (e) {
        canvasMeta.preperxy("move", e, canvas, metadata);
      },
      false
    );
    canvas.addEventListener(
      "mousedown",
      function (e) {
        canvasMeta.preperxy("down", e, canvas, metadata);
      },
      false
    );
    canvas.addEventListener(
      "mouseup",
      function (e) {
        canvasMeta.preperxy("up", e, canvas, metadata);
      },
      false
    );
    canvas.addEventListener(
      "mousemove",
      function (e) {
        canvasMeta.preperxy("move", e, canvas, metadata);
      },
      false
    );

    console.log(getSocketAxis);
  });
  //End of useEffect

  let that = this;
  // socket.on("getDraw", (data) => {
  //   if (data) {
  //     if (data.metadata.action == "createLine") canvasMeta.draw(data);
  //     else canvasMeta.clearLine(data);
  //   }
  //   console.log(data);
  //   // console.log(canvasMeta.draw({}))
  // });

  // function postDataTosocket(cordinates) {
  //   socket.emit("broadcast", cordinates);
  // }

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  var canvasMeta = {
    createLine(data) {
      console.log(data);
      ctx.beginPath();
      ctx.moveTo(data.prevx, data.prevy);
      ctx.lineTo(data.curx, data.cury);
      ctx.strokeStyle = data.metadata.color;
      ctx.lineWidth = data.metadata.penTool.size;

      ctx.stroke();
      ctx.closePath();
    },
    clearLine(data) {
      ctx.clearRect(data.curx, data.cury, 10, 10);
    },
    draw(data) {
      this.createLine(data);
    },
    preperxy(res, e, canvas, metadata) {
      metadata = sideMenuAction;

      if (res === "down") {
        let rect = getMousePos(canvas, e);
        prevx = curx;
        prevy = cury;
        curx = rect.x;
        cury = rect.y;
        flag = true;
      }
      if (res === "up" || res === "out") {
        flag = false;
      }

      if (res === "move") {
        if (flag) {
          let rect = getMousePos(canvas, e);
          prevx = curx;
          prevy = cury;
          curx = rect.x;
          cury = rect.y;
          let data = { prevx, prevy, curx, cury, metadata };

      //    postDataTosocket(data);

          //   console.log(sideMenuAction)

          switch (sideMenuAction.action) {
            case "createLine":
              this.draw(data);
              break;

            case "earse":
              this.clearLine(data);
              break;
          }
        }
      }
    },
    //End of preperData
  };
  //End of canvas meta Object

  let getAction = (act) => {
    sideMenuAction = act;
    metadata = act;

    console.log(act);
    myInput.current.style.cursor = 'crosshair';
  };

  return (
    <div className="row">
      <div className="col-xs-1 menu">
        <Sidemenu action={getAction} />
        {/* End of menubar */}
      </div>
      {/* End of col xs 1 */}
      <div className="col-xs-10 BoardPanel">
        <canvas id="myCanvas" ref={myInput} width="700" height="700"></canvas>
      </div>
    </div>
    // End of row
  );
}
//End of board component

export default Board;
