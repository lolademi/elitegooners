class Hello extends React.Component {
  render() {
    return (
      <div class="column">
        <div class="square">
          <div class="">{this.props.img}</div>
        </div>
        <div class="details hover:border-indigo-500">
          <div class="text-center">
            <h3 id="M1-NAME" class="font-mono text-2xl">
              {this.props.name}
            </h3>
            <br />
            <p id="M1-ICONS" class="flex justify-around text-lg">
              {this.props.icons}
            </p>
          </div>
          <br />
          <div class="text-left text-base">
            <span>ID: </span>
            <p class="inline-block mr-3.5">{this.props.id}</p>
            <span>Post: </span>
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
        icons={[<i class="fas fa-medal"></i>]}
      />
      <Hello
        name="Anonymous"
        id="06"
        img={[<img src="images/profile2.jpeg" />]}
        country="Nigeria"
        post="Elite"
        fplayer="Granit Xhaka"
        icons={[<i class="fas fa-medal"></i>]}
      />
      <Hello
        name="Mayowa"
        id=""
        img={[<img src="images/profile1.jpeg" />]}
        country="Nigeria"
        post="Elite"
        fplayer="Granit Xhaka"
        icons={[<i class="fas fa-medal"></i>]}
      />
      <Hello
        name="S. Abk"
        id="06"
        img={[<img src="images/profile2.jpeg" />]}
        country="Nigeria"
        post="Elite"
        fplayer="Martinelli"
        icons={[<i class="fas fa-medal"></i>]}
      />
      <Hello
        name="Rolexy"
        id=""
        img={[<img src="images/profile1.jpeg" />]}
        country="Nigeria"
        post="Elite"
        fplayer="Unknown"
        icons={[<i class="fas fa-medal"></i>]}
      />
      <Hello
        name="Godfrey"
        id=""
        img={[<img src="images/profile1.jpeg" />]}
        country="Kenya"
        post="Member"
        fplayer="Unknown"
        icons={[<i class="fas fa-user"></i>]}
      />
      <Hello
        name="Mary"
        id=""
        img={[<img src="images/profile6.png" />]}
        country="Nigeria"
        post="Member"
        fplayer="Unknown"
        icons={[<i class="fas fa-user"></i>]}
      />
    </div>
  );
}

const el = <Memb />;
ReactDOM.render(el, document.getElementById("mydiv"));
