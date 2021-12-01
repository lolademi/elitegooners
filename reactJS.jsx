

class Hello extends React.Component {
    render() {
      return (
          <div class="row">
          <div class="square">
            <div class="img">
              {this.props.img}
            </div>
          </div>
          <div class="details">
            <div class="text-center">
              <h3 id="M1-NAME" class="font-mono text-2xl"> 
                {this.props.name} 
              </h3>
              <p id="M1-ICONS" class="flex justify-around text-lg"> 
                {this.props.icons} 
              </p>
            </div>
              <br />
            <div class="text-left text-base">
              <span>ID: </span>
                <p id="M1-ID" class="inline"> {this.props.id} </p><br/>
              <span>Country: </span>
                <p id="M1-CTRY" class="inline"> {this.props.country} </p><br/>
              <span>Post: </span>
                <p id="M1-POST" class="inline"> {this.props.post} </p><br/>
              <span>Fav. Player: </span>
                <p id="M1-FAVPLAYER" class="inline"> {this.props.fplayer} </p><br/>
            </div>
            
          </div>
        </div>
      );
    }
  }

  function Memb (){
      return (
          <div class="mycontainer">
                <Hello name="Lolade" id="01" 
                  img ={[<img src='images/shittu.jpg'/>]} 
                  country="Nigeria" 
                  post="Admin" 
                  fplayer="Bukayo Saka"
                  icons={[<i class="fas fa-medal"></i>, 
                    <i class="fas fa-crown"></i>, 
                    <i class="fas fa-user-check"></i>]} 
                /> 
                <Hello name="HarryPee" id="02"
                img ={[<img src='images/harrypee.jpg'/>]} 
                country="Nigeria" 
                post="Admin" 
                fplayer="A. Lacazette"
                icons={[<i class="fas fa-medal"></i>, 
                  <i class="fas fa-crown"></i>]}
                />  
                <Hello name="Kingsley" id="03" 
                img ={[<img src='images/kingsley.jpg'/>]}
                country="Rwanda" 
                post="Admin" 
                fplayer="Granit Xhaka"
                icons={[<i class="fas fa-medal"></i>, 
                  <i class="fas fa-crown"></i>]}
                />
                <Hello name="Samuel" id="04" 
                img ={[<img src='images/samuel.jpg'/>]}
                country="Nigeria" 
                post="Admin" 
                fplayer="A. Ramsdale"
                icons={[<i class="fas fa-medal"></i>, 
                  <i class="fas fa-crown"></i>]}
                />  
                <Hello name="Zamani" id="05" 
                img ={[<img src='images/zamani.jpg'/>]}
                country="Nigeria" 
                post="Admin" 
                fplayer="P. Aubamayang"
                icons={[<i class="fas fa-medal"></i>, 
                  <i class="fas fa-crown"></i>]}
                />             
                <Hello name="Deejay Konami" id="07" 
                img ={[<img src={'images/profile2.jpeg'}/>]}
                country="Nigeria" 
                post="Elite Member" 
                fplayer="Bukayo Saka"
                icons={[<i class="fas fa-medal"></i>]}
                />               
                <Hello name="Anonymous" id="06" 
                img ={[<img src='images/profile2.jpeg'/>]}
                country="Nigeria" 
                post="Elite Member" 
                fplayer="Granit Xhaka"
                icons={[<i class="fas fa-medal"></i>]}
                /> 
                <Hello name="Mayowa" id="06" 
                img ={[<img src='images/zamani.jpg'/>]}
                country="Nigeria" 
                post="Elite Member" 
                fplayer="Granit Xhaka"
                icons={[<i class="fas fa-medal"></i>]}
                />
                <Hello name="S. Abk" id="06" 
                img ={[<img src='images/profile2.jpeg'/>]}
                country="Nigeria" 
                post="Elite Member" 
                fplayer="Martinelli"
                icons={[<i class="fas fa-medal"></i>]}
                />  
                <Hello name="Rolexy" id="" 
                img ={[<img src='images/profile1.jpeg'/>]}
                country="Nigeria" 
                post="Elite Member" 
                fplayer=""
                icons={[<i class="fas fa-medal"></i>]}
                />
                <Hello name="Mary" id="06" 
                img ={[<img src='images/profile6.png'/>]}
                country="Nigeria" 
                post="Elite Member" 
                fplayer="Unknown"
                icons={[<i class="fas fa-medal"></i>]}
                />       
          </div>
      );
  }

  const el = <Memb/>;
  ReactDOM.render(el, document.getElementById('mydiv'));
