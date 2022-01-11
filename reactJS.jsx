class Hello extends React.Component {
  render() {
    return (
      <div class="column flex rounded-2xl  p-4 w-full lg:w-5/12">
        <div class="square shadow-xl border-solid rounded-xl">
          <div class=" mx-auto   ">{this.props.img}</div>
        </div>
        <div class="details p-1 text-3xl leading-10">
          <div class="text-center">
            <i id="M1-NAME" class="text-4xl font-bold">
              <strong> {this.props.name} </strong>
            </i>

            <p id="M1-ICONS" class="flex justify-around text-4xl">
              {this.props.icons}
            </p>
          </div>
          <br />
          <div class="text-left">
            <span>ID: </span>
            <p class="inline-block mr-3.5">{this.props.id}</p>
            <br />
            <span>Rank: </span>
            <p class="inline-block">{this.props.post}</p>
            <br />
            <span>Country: </span>
            <p class="inline-block">{this.props.country}</p>
            <br />
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

function Memb() {
  return (
    <div class="row">
      <Hello
        name="Lolade"
        id="01"
        img={[<img src="images/shittu.jpg" alt="profile img" />]}
        country="Nigeria"
        post="Admin"
        fplayer="Bukayo Saka"
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
        country="Nigeria"
        post="Admin"
        fplayer="A. Lacazette"
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
        country="Nigeria"
        post="Admin"
        fplayer="A. Ramsdale"
        icons={[<i class="fas fa-medal"></i>, <i class="fas fa-crown"></i>]}
      />
      <Hello
        name="Zamani"
        id="05"
        img={[<img src="images/zamani.jpg" />]}
        country="Nigeria"
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
        icons={star3}
      />
      <Hello
        name="Ejiyemi"
        id="09"
        img={[<img src={"images/profile2.jpeg"} />]}
        country="Nigeria"
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
        icons={star3}
      />
      <Hello
        name="Mayowa"
        id=""
        img={[<img src="images/profile2.jpeg" />]}
        country="Nigeria"
        post="Elite"
        fplayer="Granit Xhaka"
        icons={star2}
      />
      <Hello
        name="S. Abk"
        id="06"
        img={[<img src="images/profile2.jpeg" />]}
        country="Nigeria"
        post="Elite"
        fplayer="Martinelli"
        icons={star3}
      />
      <Hello
        name="Rolexy"
        id=""
        img={[<img src="images/profile2.jpeg" />]}
        country="Nigeria"
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
        country="Nigeria"
        post="Comrade"
        fplayer="Unknown"
        icons={star2}
      />

      
     <a href="https://www.chainmine.io/?ref=miFHAX4X"><img src="https://www.chainmine.io/assets/images/banner/b2.gif"></a>
       

    </div>
  );
}

const el = <Memb />;
ReactDOM.render(el, document.getElementById("mydiv"));
