import { Box, Button, Card, CardContent, CardMedia } from "@mui/material";
import Container from "@mui/material/Container";
import Movie from "../../json/movie.json";
import Person from "../../json/person.json";
import { Link, useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function HomePage() {
  const navMovie = useNavigate();
  function navigatorMovie(id: unknown) {
    navMovie("/movie/?index=" + id);
  }
  const navPerson = useNavigate();
  function navigatorPerson(id2: unknown) {
    navPerson("/person/?index2=" + id2);
  }
  return (
    <>
      {/* ส่วน Movie */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#E0E0E0",
        }}
      >
        <Box display={"flex"} flexDirection={"row"} sx={{ gap: 2 }}>
          <div>
            <div style={{ marginTop: "4%", display: "flex" }}>
              <div>
                <h4 style={{ color: "blue" }}>|</h4>
              </div>
              <h4>Top 6 on IMDb this week</h4>
            </div>
            <div
              style={{
                width: "80%",
                height: "450px",
                display: "flex",
                justifyContent: "space-around",
                margin: "0 auto",
                // marginTop: "30px",
              }}
            >
              {Movie.map((item, id) => (
                <div>
                  <Card sx={{ width: 170, borderRadius: 2, marginRight: 2 }}>
                    <div style={{ position: "relative" }}>
                      <Card
                        sx={{ width: 170, borderRadius: 2 }}
                      >
                        <CardMedia
                          component="img"
                          height="250"
                          image={item.img}
                          alt="green iguana"
                          onClick={() => navigatorMovie(id)}
                        />
                        {/* Add and Bookmark Icons */}
                        <div style={{ position: "absolute", top: 0, left: 0 }}>
                          <BookmarkIcon sx={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 40 }} />
                          <AddIcon
                            sx={{
                              color: "black",
                              fontSize: 25,
                              position: "absolute",
                              top: 4,
                              left: 8,
                            }}
                          />
                        </div>
                      </Card>
                    </div>
                    <CardContent style={{ height: "45px" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <StarIcon
                          sx={{ color: "#E3AF00", width: "20px" }}
                        ></StarIcon>
                        {item.star}
                        <StarBorderIcon
                          sx={{
                            color: "#007CD7",
                            width: "20px",
                            marginLeft: "20px",
                          }}
                        ></StarBorderIcon>
                      </div>
                      <div>
                        <Link
                          to={"/movie/?index=" + id}
                          style={{ color: "black", fontSize: "14px" }}
                        >
                          {item.id + ". "}
                          {item.name}
                        </Link>
                      </div>
                    </CardContent>
                    <center style={{ marginTop: "10px", padding: "10px" }}>
                      <Button
                        sx={{ width: "100%", fontSize: "12px" }}
                        variant="outlined"
                      >
                        <AddIcon></AddIcon>
                        Watchlist
                      </Button>
                    </center>
                    <Button
                      sx={{
                        width: "60%",
                        fontSize: "12px",
                        marginLeft: "30px",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <PlayArrowIcon></PlayArrowIcon>
                      </div>
                      Trailer
                    </Button>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Container>

      {/* ส่วน Person */}
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box display={"flex"} flexDirection={"row"} sx={{ gap: 2 }}>
          <div>
            <div style={{ display: "flex" }}>
              <h4 style={{ marginLeft: "2%", color: "blue" }}>|</h4>
              <h4>Born today</h4>
              <div style={{ marginTop: "2%", height: "20px" }}>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
                {/* <div>
             <p >
             People born on February 12
             </p>
            </div> */}
              </div>
            </div>
            <div
              style={{
                width: "80%",
                height: "500px",
                display: "flex",
                justifyContent: "space-around",
                margin: "0 auto",
                // marginTop: "20px",
              }}
            >
              {Person.map((item2, id2) => (
                <div
                  style={{
                    marginRight: 20,
                    marginLeft: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src={item2.img}
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "30%",
                    }}
                    alt=""
                    onClick={() => navigatorPerson(id2)}
                  />
                  <div style={{ textAlign: "center" }}>
                    <Link
                      to={"/person/?index2=" + id2}
                      style={{ color: "black", fontSize: "14px" }}
                    >
                      {item2.name}
                      <br />
                      {item2.age}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default HomePage;

