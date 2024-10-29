import { Button, Card, Divider } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link, useSearchParams } from "react-router-dom";
import Movie from "../../json/movie.json";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CollectionsIcon from "@mui/icons-material/Collections";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AddIcon from "@mui/icons-material/Add";

function MoviePage() {
  const [search] = useSearchParams();
  const id = search.get("index");
  const movie = Movie[Number(id)];

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#E0E0E0",
          height : "1000px"
        }}
      >
        <div>
          <Link to={"/"}>
            <h3>
              {"< "}
              Back
            </h3>
          </Link>

          <Card >
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <div style={{ marginLeft: "40px" }}>
                <h3>{movie.name}</h3>
              </div>
              <Box
                sx={{ fontSize: "12px", marginRight: "30px", marginTop: "5px" }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ textAlign: "center",marginRight: "20px" }}>IMDB RATING</div>
                  <div style={{ textAlign: "center",marginRight: "20px" }}>YOUR RATING</div>
                  <div style={{ textAlign: "center" }}>POPULARITY</div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" ,marginRight: "40px"}}>
                    <StarIcon
                      sx={{ color: "#E3AF00", width: "35px" }}
                    ></StarIcon>
                    {movie.star}/10
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center",marginRight: "40px" }}>
                    <StarBorderIcon
                      sx={{
                        color: "#007CD7",
                        width: "20px",
                        marginLeft: "10px",
                      }}
                    ></StarBorderIcon>
                    Rate
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ArrowCircleRightIcon
                    sx={{
                      color: "black",
                        width: "20px",
                        marginLeft: "10px",
                    }}>

                    </ArrowCircleRightIcon>
                    10
                  </div>
                </div>
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              sx={{ mx: 3, marginTop: "10px" }}
            >
              <img style={{ width: 250, height: 350 }} src={movie.img} alt="" />
              <Box
                display={"flex"}
                flexDirection={"row"}
                sx={{ gap: 2, mx: 3 }}
              >
                <iframe
                  style={{ width: 650 }}
                  width="600"
                  height="350"
                  src={movie.video}
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
            <Box display={"flex"} flexDirection={"row"} sx={{ gap: 4, mx: 3 }}>
              {movie.typeMovie.map((item) => (
                <Button style={{ borderRadius: "20px", background: "black" }}>
                  <div style={{color : "white"}}>
                  {item.name}
                  </div>
                </Button>
              ))}
            </Box>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70%",
                  marginLeft: "30px",
                }}
              >
                {movie.detail}
                <Divider sx={{ width: "95%", bgcolor: "gray", my: 2 }} />
                <Box
                display={"flex"}
                flexDirection={"row"}
                sx={{ gap: 4, mx: 3 }}
              >
                Director
                {movie.director.map((item) => (
                  <Link
                    to={"/actor/?name=" + item.name + "&index=" + id}
                    style={{ color: "blue" }}
                  >
                    {item.name}
                  </Link>
                ))}
              </Box>
              <Divider sx={{ width: "95%", bgcolor: "gray", my: 2 }} />
              <Box
                display={"flex"}
                flexDirection={"row"}
                sx={{ gap: 4, mx: 3 }}
              >
                Writer
                {movie.writer.map((writer) => (
                  <Link
                    to={"/actor/?name=" + writer.name + "&index=" + id}
                    style={{ color: "blue" }}
                  >
                    {writer.name}
                  </Link>
                ))}
              </Box>
              <Divider sx={{ width: "95%", bgcolor: "gray", my: 2 }} />
              <Box
                display={"flex"}
                flexDirection={"row"}
                sx={{ gap: 4, mx: 3 }}
              >
                Stars
                {movie.stars.map((stars) => (
                  <Link
                    to={"/actor/?name=" + stars.name + "&index=" + id}
                    style={{ color: "blue" }}
                  >
                    {stars.name}
                  </Link>
                ))}
              </Box>
              <Divider sx={{ width: "95%", bgcolor: "gray", my: 2 }} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "20%",
                  marginLeft: "20px",
                  marginTop: "85px",
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
                  <AddIcon style={{ marginRight: "2px" }} />
                  Add to Watchlist
                </button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default MoviePage;

