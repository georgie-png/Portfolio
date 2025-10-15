// md_obj to hold our mdOBJ class
let obj;
let graphName;

// merGraph to hold our obj2Mer class
let merGraph;

// Getting HTML elements we are adding to for the mermaid graph and errors.
let eleM;

// start function initiates classes and gets pad data . . . 
start();

function start() {

  eleM = document.querySelector('.mermaid');

  merGraph = new obj2Mer();
  graphName = "";
  obj =   {
              "steps": [
                "access",
                "in touch",
                "friction",
                "reverberate",
                "impress", 
                "configurations"
              ],
              "movements": [
                "cripping",
                "slow",
                "misfit",
                "deviate",
                "shape",
              ]
            };

  mermaidDraw();
   
  eleM.addEventListener('click',mermaidDraw)
  }



// main function called by button 
async function mermaidDraw() {
 console.log("here");
  shuffle(obj.steps)
  merGraph.setObj(obj, graphName);
  let rotation = (eleM.offsetWidth > eleM.offsetHeight);
  let result_graph = await merGraph.GenGraph(rotation);

  if (typeof result_graph === 'object' && !Array.isArray(result_graph) && result_graph !== null) {
    //console.log(result_graph.svg);
    eleM.setAttribute("alt", result_graph.alt_description);
    eleM.innerHTML = result_graph.svg;
  }

}


function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


