
export namespace htmlTempData {
  // export const HDHtml = `<!DOCTYPE html>
  // <html lang="en">
  //   <head>
  //     <meta charset="UTF-8" />
  //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <title>Document</title>
  //     <style>
  //       * {
  //         padding: 0;
  //         margin: 0;
  //         font-family: "WenQuanYi Zen Hei Sharp" Sans-serif;
  //       }
  //       div {
  //         width: 100%;
  //         text-align: center;
  //         word-wrap: break-word;
  //         word-break: break-all;
  //       }
  //       #top {
  //         height: 21.1%;
  //         position: relative;
  //       }
  
  //       #top-title {
  //         position: absolute;
  //         left: 50%;
  //         top: 50%;
  //         transform: translate(-50%, -50%);
  //       }
  //       #content {
  //         height: 63%;
  //         background-color: red;
  //         color: white;
  //       }
  //       #content-user {
  //         width: 100%;
  //         height: 80%;
  //         position: relative;
  //       }
  //       #content-user div {
  //         font-size: 144px;
  //         position: absolute;
  //         left: 50%;
  //         top: 50%;
  //         transform: translate(-50%, -50%);
  //       }
  
  //       #content-tests {
  //         width: 100%;
  //         height: 20%;
  //         font-size: 30px;
  //         margin: auto;
  //       }
  //       #bottom {
  //         height: 15.9%;
  //       }
  //       #bottom-left {
  //         font-size: 37px;
  //         height: 98%;
  //         width: 48%;
  //         float: left;
  //         text-align: left;
  //         padding-left: 2%;
  //         padding-top: 1%;
  //       }
  //       #bottom-right {
  //         float: right;
  //         height: 100%;
  //         width: 50%;
  //         position: relative;
  //         left: -5px;
  //       }
  //       #bottom-right-time {
  //         font-size: 25px;
  //         width: 40%;
  //         height: 96%;
  //         float: left;
  //         padding-left: 17%;
  //         text-align: left;
  //         margin-left: 2%;
  //         margin-top: 2%;
  //       }
  //       #bottom-right-statu {
  //         font-size: 37px;
  //         width: 35%;
  //         height: 97%;
  //         float: right;
  //         text-align: right;
  //         position: relative;
  //         right: 0;
  //         margin-top: 2%;
  //       }
  //       #bottom-right-ttt {
  //         width: 3%;
  //         height: 85%;
  //         margin-top: 2%;
  //         position: absolute;
  //         left: 60%;
  //         background-color: black;
  //       }
  //     </style>
  //   </head>
  //   <body>
  //     <div id="top">
  //       <div id="top-title">${data.title}</div>
  //     </div>
  //     <div id="content">
  //       <div id="content-user">
  //         <div>${data.name}</div>
  //       </div>
  //       <div id="content-tests">${data.testName}</div>
  //     </div>
  //     <div id="bottom">
  //       <div id="bottom-left">${data.meetName}</div>
  //       <div id="bottom-right">
  //         <div id="bottom-right-time">
  //           ${data.startTime.splite(" ")[0]}<br />
  //           ${data.startTime.splite(" ")[1]
  //         </div>
  //         <div id="bottom-right-ttt"></div>
  //         <div id="bottom-right-statu">${data.statu}</div>
  //       </div>
  //     </div>
  //     <script>
  //       let width = document.querySelector("body").offsetWidth;
  //       document.getElementById("top-title").style.fontSize =
  //         0.075 * width + "px";
  //     </script>
  //   </body>
  // </html>
  //   `;


    // 400 * 300
  // export const HDHtml =`
  // <!DOCTYPE html>
  // <html lang="en">
  //   <head>
  //     <meta charset="UTF-8" />
  //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //     <meta name="viewport" content="width=1200, initial-scale=1.0" />
  //     <title>Document</title>
  //     <script>
  //     document.querySelectoy("meta[name=viewport]").setAttribute("content", "width=300, initial-scale=1.0");
  //     </script>
  //     <style>
  //       * {
  //         padding: 0;
  //         margin: 0;
  //       }
  //       body {
  //         background-color: white;
  //         font-size: 62.5%;
  //       }
  //       div {
  //         width: 100%;
  //         text-align: center;
  //         word-wrap: break-word;
  //         word-break: break-all;
  //       }
  //       #top {
  //         height: 21.1%;
  //         position: relative;
  //       }
  
  //       #top-title {
  //         position: absolute;
  //         left: 50%;
  //         top: 50%;
  //         font-size: 5em;
  //         transform: translate(-50%, -50%);
  //       }
  //       #content {
  //         height: 63%;
  //         background-color: red;
  //         color: white;
  //       }
  //       #content-user {
  //         width: 100%;
  //         height: 80%;
  //         position: relative;
  //       }
  //       #content-user div {
  //         font-size: 14vw;
  //         position: absolute;
  //         left: 50%;
  //         top: 50%;
  //         transform: translate(-50%, -50%);
  //       }
  
  //       #content-tests {
  //         width: 100%;
  //         height: 20%;
  //         font-size: 3vw;
  //         margin: auto;
  //       }
  //       #bottom {
  //         height: 15.9%;
  //       }
  //       #bottom-left {
  //         font-size: 150%;
  //         height: 98%;
  //         width: 48%;
  //         float: left;
  //         text-align: left;
  //         padding-left: 2%;
  //         padding-top: 1%;
  //       }
  //       #bottom-right {
  //         float: right;
  //         height: 100%;
  //         width: 50%;
  //         position: relative;
  //         left: -5px;
  //         top: 1%;
  //       }
  //       #bottom-right-time {
  //         font-size: 100%;
  //         width: 40%;
  //         height: 96%;
  //         float: left;
  //         padding-left: 17%;
  //         text-align: left;
  //         margin-left: 8%;
  //         margin-top: 3%;
  //       }
  //       #bottom-right-statu {
  //         font-size: 130%;
  //         width: 35%;
  //         height: 97%;
  //         float: right;
  //         text-align: right;
  //         position: relative;
  //         right: 0;
  //         margin-top: 4%;
  //       }
  //       #bottom-right-ttt {
  //         width: 3%;
  //         height: 80%;
  //         margin-top: 2%;
  //         position: absolute;
  //         left: 65%;
  //         background-color: black;
  //       }
  //     </style>
      
  //   </head>
  //   <body>
  //     <div id="top">
  //       <div id="top-title">111111111</div>
  //     </div>
  //     <div id="content">
  //       <div id="content-user">
  //         <div>郑柯爽</div>
  //       </div>
  //       <div id="content-tests">测试人员</div>
  //     </div>
  //     <div id="bottom">
  //       <div id="bottom-left">测试会议12333</div>
  //       <div id="bottom-right">
  //         <div id="bottom-right-time">
  //           2022-2-25<br />
  //           14:30-16:30
  //         </div>
  //         <div id="bottom-right-ttt"></div>
  //         <div id="bottom-right-statu">会议中</div>
  //       </div>
  //     </div>
      
  //   </body>
  //   <script>
        
  //     </script>
  // </html>
  

  //  400 * 300 red
  // export const HDHtml = `
  //     <!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //       <meta charset="UTF-8">
  //       <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //       <title>Document</title>
  //       <style>
  //           * {
  //             padding: 0;
  //             margin: 0;
  //           }
  //           body {
  //             /* font-size: 62.5%; */
  //             width: 400px;
  //             height: 300px;
  //             text-align: center;
  //             word-wrap: break-word;
  //             word-break: break-all;
  //             /* font-size: 10px; */
  //             position: relative;
  //             color: white;
  //           }
  //         div{
  //             width: 100%;
  //             height: 100%;
  //             background-color: red;
  //         }

  //           #content{
  //               display: inline-block;
  //               position: absolute;
  //               width: 100%;
  //               left: 50%;
  //               top: 50%;
  //               transform: translate(-50%, -50%);
  //               /* height: 200px; */
  //               font-size: 6em;
  //           }
  //         </style>
  //   </head>
  //   <body>
  //           <!-- <div id="content">1212</div> -->
  //       <div>
  //           <h1 id="content">
  //               ${data.content}
  //           </h1>
  //       </div>
  //   </body>
  //   </html>
  // `

  // 640 * 384 red
  export const HDHtml = `
          <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                * {
                  padding: 0;
                  margin: 0;
                }
                body {
                  /* font-size: 62.5%; */
                  width: 640px;
                  height: 380px;
                  text-align: center;
                  word-wrap: break-word;
                  word-break: break-all;
                  /* font-size: 10px; */
                  position: relative;
                  color: white;
                }
              div{
                  width: 100%;
                  height: 100%;
                  background-color: red;
              }

                #content{
                    display: inline-block;
                    position: absolute;
                    width: 100%;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    /* height: 200px; */
                    font-size: 9em;
                }
              </style>
        </head>
        <body>
            <div>
                <h1 id="content">
                    中国文学
                </h1>
            </div>
        </body>
        </html>
  `
}
