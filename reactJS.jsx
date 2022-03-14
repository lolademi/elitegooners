class Hello extends React.Component {
  render() {
    return (
      <div class="column flex w-full   p-4 md:w-96 min-w-fit">
        <div class="square rounded-3xl mx-auto shadow-xl border-solid ">
          <div class="profile_pi">{this.props.img}</div>
        </div>

        <div class="details ml-2 p-1 leading-loose">
          <div class="text-center">
            <p id="M1-NAME" class="text-xl mb-4">
              <strong> {this.props.name} </strong>
            </p>

            <p id="M1-ICONS" class="flex justify-around mb-4">
              {this.props.icons}
            </p>
          </div>

          <div class="fp_pic">{this.props.fp_pic}</div>

          <div class="text-left">
            <span>ID: </span>
            <p class="inline-block mr-3.5">{this.props.id}</p>
            <br />
            <span>Rank: </span>
            <p class="inline-block">{this.props.post}</p>
            <br />
            <div class="flex">
              <span>Country: </span>
              <p class="flex justify-around inline-bloc ml-2">
                {this.props.country}
              </p>
            </div>

            <span>Fav. Player: </span>
            <p class="inline-block">{this.props.fplayer}</p>
          </div>
        </div>
      </div>
    );
  }
}

//STARS
var star1 = [
  <i class="fas fa-star"></i>,
  <i class="far fa-star"></i>,
  <i class="far fa-star"></i>,
  <i class="far fa-star"></i>,
  <i class="far fa-star"></i>,
];
var star2 = [
  <i class="fas fa-star"></i>,
  <i class="fas fa-star"></i>,
  <i class="far fa-star"></i>,
  <i class="far fa-star"></i>,
  <i class="far fa-star"></i>,
];
var star3 = [
  <i class="fas fa-star"></i>,
  <i class="fas fa-star"></i>,
  <i class="fas fa-star"></i>,
  <i class="far fa-star"></i>,
  <i class="far fa-star"></i>,
];
var star4 = [
  <i class="fas fa-star"></i>,
  <i class="fas fa-star"></i>,
  <i class="fas fa-star"></i>,
  <i class="fas fa-star"></i>,
  <i class="far fa-star"></i>,
];
var star5 = [
  <i class="fas fa-star"></i>,
  <i class="fas fa-star"></i>,
  <i class="fas fa-star"></i>,
  <i class="fas fa-star"></i>,
  <i class="fas fa-star"></i>,
];

//Countries
var ng = [
  <div class="tooltip">
    <img src="/images/ng.svg" height="25px" width="35px" />
    <span class="tooltiptext">Nigeria</span>
  </div>,
];

//Players
var saka = [<img src="images/saka.jpeg" alt="player img" />];
var xhaka = [<img src="images/xhaka.jpeg" alt="player img" />];

function Memb() {
  return (
    <div class="row">
      <Hello
        name="Lolade"
        id="01"
        img={[<img src="images/shittu.jpg" alt="profile img" />]}
        country={ng}
        post="Admin"
        fplayer="Bukayo Saka"
        fp_pic={saka}
        icons={[
          <i class="fas fa-medal"></i>,
          <i class="fas fa-crown"></i>,
          <i class="fas fa-user-check"></i>,
        ]}
      />
      <Hello
        name="HarryPee"
        id="02"
        img={[<img src="images/harrypee.jpg" />]}
        country={ng}
        post="Admin"
        fplayer="A. Lacazette"
        fp_pic={saka}
        icons={[<i class="fas fa-medal"></i>, <i class="fas fa-crown"></i>]}
      />
      <Hello
        name="Kingsley"
        id="03"
        img={[<img src="images/kingsley.jpg" />]}
        country="Rwanda"
        post="Admin"
        fplayer="Granit Xhaka"
        icons={[<i class="fas fa-medal"></i>, <i class="fas fa-crown"></i>]}
      />
      <Hello
        name="Samuel"
        id="04"
        img={[<img src="images/samuel.jpg" />]}
        country={ng}
        post="Admin"
        fplayer="A. Ramsdale"
        icons={[<i class="fas fa-medal"></i>, <i class="fas fa-crown"></i>]}
      />
      <Hello
        name="Zamani"
        id="05"
        img={[<img src="images/zamani.jpg" />]}
        country={ng}
        post="Admin"
        fplayer="P. Aubamayang"
        icons={[<i class="fas fa-medal"></i>, <i class="fas fa-crown"></i>]}
      />
      <Hello
        name="Deejay Konami"
        id="07"
        img={[<img src={"images/profile2.jpeg"} />]}
        country="Nigeria"
        post="Elite"
        fplayer="Bukayo Saka"
        icons={star4}
      />
      <Hello
        name="Ejiyemi"
        id="09"
        img={[<img src={"images/profile2.jpeg"} />]}
        country={ng}
        post="Elite"
        fplayer="Bukayo Saka"
        icons={star3}
      />
      <Hello
        name="Anonymous"
        id="10"
        img={[<img src="images/profile2.jpeg" />]}
        country="Nigeria"
        post="Elite"
        fplayer="Granit Xhaka"
        icons={star4}
      />
      <Hello
        name="Mayowa"
        id=""
        img={[<img src="images/profile2.jpeg" />]}
        country={ng}
        post="Elite"
        fplayer="Granit Xhaka"
        icons={star3}
      />
      <Hello
        name="S. Abk"
        id="06"
        img={[<img src="images/profile2.jpeg" />]}
        country={ng}
        post="Elite"
        fplayer="Martinelli"
        icons={star3}
      />
      <Hello
        name="Rolexy"
        id=""
        img={[<img src="images/profile2.jpeg" />]}
        country={ng}
        post="Elite"
        fplayer="Unknown"
        icons={star2}
      />
      <Hello
        name="Godfrey"
        id=""
        img={[<img src="images/profile2.jpeg" />]}
        country="Kenya"
        post="Comrade"
        fplayer="Unknown"
        icons={star2}
      />
      <Hello
        name="Mary"
        id=""
        img={[<img src="images/profile6.png" />]}
        country={ng}
        post="Comrade"
        fplayer="Unknown"
        icons={star2}
      />
    </div>
  );
}

const el = <Memb />;
ReactDOM.render(el, document.getElementById("mydiv"));
