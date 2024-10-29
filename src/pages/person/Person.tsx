import { Card, Divider } from "@mui/material";
import { Container, Box } from "@mui/system";
import Person from "../../json/person.json";
import { Link, useSearchParams } from "react-router-dom";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CollectionsIcon from "@mui/icons-material/Collections";
import AddIcon from "@mui/icons-material/Add";

function PersonPage() {
  const [search] = useSearchParams();
  const id2 = search.get("index2");
  const person = Person[Number(id2)];

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#E0E0E0",
          height: "1000px",
        }}
      >
        <div>
          <Link to={"/"}>
            <h3>
              {"< "}
              Back
            </h3>
          </Link>

          <Card>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <div style={{ marginLeft: "3%" }}>
                <h3>{person.name}</h3>
              </div>
              <Box
                sx={{ fontSize: "10px", marginRight: "30px", marginTop: "5px" }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ textAlign: "center", marginRight: "20px" }}>
                    IMDbPro
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      display: "flex",
                      marginRight: "20px",
                      fontSize: "13px",
                    }}
                  >
                    STARMETER
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TrendingDownIcon
                      sx={{
                        color: "red",
                        width: "20px",
                        marginLeft: "10px",
                      }}
                    ></TrendingDownIcon>
                    <div style={{ fontSize: "15px" }}>10</div>
                  </div>
                </div>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"row"} sx={{ mx: 3 }}>
              <img
                style={{ width: 250, height: 350 }}
                src={person.img}
                alt=""
              />
              <Box
                display={"flex"}
                flexDirection={"row"}
                sx={{ gap: 4, mx: 3 }}
              >
                <iframe
                  style={{ width: 650 }}
                  width="600"
                  height="350"
                  src={person.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
                <Card
                  style={{ width: "150px", height: "160px", background: "" }}
                >
                  <VideoLibraryIcon
                    sx={{
                      color: "#007CD7",
                      width: "30px",
                      height: "30px",
                      marginLeft: "60px",
                      marginTop: "50px",
                    }}
                  ></VideoLibraryIcon>
                  <br />
                  <p style={{ textAlign: "center", fontSize: "12px" }}>
                    30 VIDEOS
                  </p>
                </Card>
                <br />
                <Card
                  style={{ width: "150px", height: "160px", background: "" }}
                >
                  <CollectionsIcon
                    sx={{
                      color: "#007CD7",
                      width: "30px",
                      height: "30px",
                      marginLeft: "60px",
                      marginTop: "50px",
                    }}
                  ></CollectionsIcon>
                  <br />
                  <p style={{ textAlign: "center", fontSize: "12px" }}>
                    99+ PHOTOS
                  </p>
                </Card>
              </Box>
            </Box>
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70%",
                  marginLeft: "30px",
                }}
              >
                {person.detail}
                <Divider sx={{ width: "100%", bgcolor: "gray", my: 2 }} />
                <Box display={"flex"} flexDirection={"row"} sx={{ gap: 4 }}>
                  More at IMDbPro
                </Box>
                <br />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "20%",
                  marginLeft: "50px",
                  marginTop: "50px",
                }}
              >
                <button
                  style={{
                    background: "#007CD7",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AddIcon style={{ marginRight: "5px" }} />
                  Add to list
                </button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default PersonPage;

//****************************************************************************************************** */

// import { Card, Divider } from "@mui/material"
// import { Container, Box } from "@mui/system"
// // import Person from "../../json/person.json";
// import { Link, useSearchParams } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
// import CollectionsIcon from "@mui/icons-material/Collections";
// import getPeople from "../../json/Data_Qrganize";

// function PersonPage (){
//     const [search] = useSearchParams();
//     const pername = search.get("name");
//     //const person = Person[Number(id2)];
//     const pers = getPeople();
//     let per;
//     pers.forEach((x)=>{
//       if (x.name == pername) {
//         per = x;
//       }
//     });

//     return (
//         <>
//         <Container sx={{ width: "80vw" }}>
//         <div>
//         <Link to={"/"}>
//         <h3>
//         {"< "}
//         Back
//         </h3>
//         </Link>
//         </div>
//         <Card style={{background : "gray"}}>
//         <Box display={"flex"} flexDirection={"row"}>
//             <div style={{ marginLeft: "3%" }}>
//               <h3>{per!.name}</h3>
//             </div>
//             <Box
//               display={"flex"}
//               flexDirection={"row"}
//               sx={{ gap: 4, mx: 3, marginLeft: "60%" }}
//             >
//               <div>
//                 <p>IMDB RATING</p>
//                 <StarIcon sx={{ color: "#E3AF00", width: "20px" }}></StarIcon>
//                 /10
//               </div>

//               <div>
//                 <p>POPULARITY</p>
//                 <StarBorderIcon
//                   sx={{
//                     color: "#007CD7",
//                     width: "20px",
//                     marginLeft: "10px",
//                   }}
//                 >
//                   Rate
//                 </StarBorderIcon>
//               </div>
//             </Box>
//           </Box>
//         <Box display={"flex"} flexDirection={"row"} sx={{ mx: 3 }}>
//           <img
//             style={{ width: 250, height: 350 }}
//             src={per!.img}
//             alt=""
//           />
//           <Box display={"flex"} flexDirection={"row"} sx={{ gap: 4, mx: 3 }}>
//           <iframe
//             style={{ width: 650 }}
//             width="600"
//             height="350"
//             src={per!.video}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//           ></iframe>
//         </Box>
//         <Box display={"flex"} flexDirection={"column"}>
//               <Card style={{ width: "150px", height: "160px", background: "" }}>
//                 <VideoLibraryIcon
//                   sx={{
//                     color: "#007CD7",
//                     width: "30px",
//                     height: "30px",
//                     marginLeft: "60px",
//                     marginTop: "50px",
//                   }}
//                 ></VideoLibraryIcon>
//                 <br />
//                 <p style={{ textAlign: "center", fontSize: "12px" }}>
//                   30 VIDEOS
//                 </p>
//               </Card>
//               <br />
//               <Card style={{ width: "150px", height: "160px", background: "" }}>
//                 <CollectionsIcon
//                   sx={{
//                     color: "#007CD7",
//                     width: "30px",
//                     height: "30px",
//                     marginLeft: "60px",
//                     marginTop: "50px",
//                   }}
//                 ></CollectionsIcon>
//                 <br />
//                 <p style={{ textAlign: "center", fontSize: "12px" }}>
//                   99+ PHOTOS
//                 </p>
//               </Card>
//             </Box>
//         </Box>
//         <br />
//         <Box display={"flex"} flexDirection={"row"} sx={{ gap: 4, mx: 3 }}>
//         {per!.text}
//         </Box>
//         <Divider sx={{ width: "70%", bgcolor: "gray", my: 2 }} />
//         <Box display={"flex"} flexDirection={"row"} sx={{ gap: 4, mx: 3 }}>
//         More at IMDbPro
//         </Box>
//         <br />
//         </Card>
//       </Container>
//     </>
//     )
// }

// export default PersonPage
