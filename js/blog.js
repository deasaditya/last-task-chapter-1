// global array
let blogs = []

// function get data from input text html
function getData(e) {
    e.preventDefault()

    // delaclaration variable dom selection
    let title = document.getElementById('create-project-name').value
    let content = document.getElementById("create-project-textarea").value;
    let startdate = document.getElementById('start-date').value
    let enddate = document.getElementById('end-date').value
    let nodejs = document.getElementById('node-js').checked
    let reactjs = document.getElementById('react-js').checked
    let nextjs = document.getElementById('next-js').checked
    let typescript = document.getElementById('type-script').checked
    let image = document.getElementById("image").files;

    if (title == "") 
  alert("harap isi nama");
  else if (startdate == "") 
  alert("silahkan tentukan tanggal mulai");
  else if (enddate == "") 
  alert("silahkan tentukan tanggal akhir");
  else if (content == "") 
  alert("isi deskripsi");
  else if (nodejs == false && reactjs == false && nextjs == false && typescript == false) 
  alert("silahkan centang salah satu technologies");
  else if 
  (image.length == 0) alert("pilih gambar terlebih dahulu");
  else { 
    image = URL.createObjectURL(image[0]);
    startdate = new Date(startdate);
    enddate = new Date(enddate);
    let duration = Math.floor((enddate - startdate)/ (30*24*60*60*1000));
    if (duration > 0) duration = `${duration} month${duration > 1 ? "s" : ""}`;
    else {
      duration = Math.floor((enddate - startdate)/ (7*24*60*60*1000));
      if (duration > 0) duration = `${duration} week${duration > 1 ? "s" : ""}`;
      else {
        duration = Math.floor((enddate - startdate)/ (24*60*60*1000));
        if (duration > 0) duration = `${duration} day${duration > 1 ? "s" : ""}`;
        else {
          duration = "baru saja";
        }
      }
    }
    

    let dataBlog = {
        title,
        content,
        startdate,
        enddate,
        duration,
        nodejs,
        reactjs,
        nextjs,
        typescript,
        image,
        // postedAt: new Date(),
        
        author: "Deas Aditya"
           
    };
    blogs.push(dataBlog);
    // console.log(blogs);
    showData();

    }
}

// declaration function show list preview data blog
function showData() {
  console.log(blogs);
  document.getElementById("containers-project").innerHTML = "";
  for (let blog of blogs) {
    document.getElementById("containers-project").innerHTML += `
    <div id="container-project">
      <img src="${blog.image}"/>
      <a href="detail.html"><h3>${blog.title}</h3></a>
      <div class="durasi">
      durasi: ${blog.duration} | ${blog.author}</div>
      <p>
        ${blog.content}
      </p>
      <div>
          ${blog.nodejs ? `<i class="fa-brands fa-node fa-2x"></i>` : ``}
        ${blog.reactjs ? `<i class="fa-brands fa-react fa-2x"></i>` : ``}
         ${blog.nextjs ? `<i class="fa-brands fa-node-js fa-2x"></i>` : ``}
         ${blog.typescript ? `<i class="fa-brands fa-python fa-2x"></i>` : ``}
      </div>
      <div>
        <button>edit</button>
        <button>delete</button>
      </div>
      <div style="float:right; margin: 10px">
                <p style="font-size: 15px; color:grey">1 minute ago</p>
            </div>
    </div>
    `;
  }
}


// // function manipulation date tine
function createTime(time){
    // declaration variable
    let years = time.getFullYear()
    let monthIndex = time.getMonth()
    let date = time.getDate()
    let hour = time.getHours()
    let minutes = time.getMinutes()
    
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return `${date} ${month[monthIndex]} ${years} ${hour}:${minutes} WIB`
}


// // manipulation duration time
const getDuration = (timePost) => {
    let timePosting = timePost
    let timeNow = new Date()
    let distance = timeNow - timePosting

    // 1 sec = 1000 milisecond
    // 30*24*60*60*1000

    let monthDistance = Math.floor(distance / (30*24*60*60*1000))
    if(monthDistance > 0) {
        return monthDistance + ' month ago'
    } else {
        let weekDistance = Math.floor(distance / (7*24*60*60*1000))
        if(weekDistance > 0) {
            return weekDistance + ' week ago'
        } else {
            let dayDistance = Math.floor(distance / (24*60*60*1000))
            if(dayDistance > 0) {
                return dayDistance + "Day ago"
            } else {
                let hourDistance = Math.floor(distance / (60*60*1000))
                if(hourDistance > 0) {
                    return hourDistance + "Hour ago"
                } else {
                    let minutesDistance = Math.floor(distance / (60*1000))
                    if(minutesDistance > 0) {
                        return minutesDistance + "Minute ago"
                    } else {
                        let secondDistance = Math.floor(distance / 1000)
                        if (secondDistance > 0) {
                            return secondDistance + "second ago"
                        }
                    }
                }
            }
        }
    }
}

// setInterval(showData, 1000)
