<template lang="html">

  <section class="task-pokeman">

    <div class="container-fluid px-0 ">
        <nav class="navbar navbar-expand-lg navbar-dark bg-black py-0 px-0">
          <a class="navbar-brand" href="/"><img style="height: 31px;" src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png" /></a> 
          <button class="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item"> <a class="nav-link" href="#"> Home</a> </li>
                <li class="nav-item right mr-1"> <a class="nav-link" href="#">About</a> </li>
              </ul>
          </div>
        </nav>
    </div>
    
    <!-- Body Start -->
    <div class="container-fluid mt-5 mb-5">


            <div class="row toolbar">
             <div class="col-sm-8">               

               <form role="search" class="mb-4">
                   <div class="input-group">
                       <div class="input-group-prepend">
                         <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <span id="srch-category">Search By</span>
                         </button>
                         <div class="dropdown-menu">
                           <a class="dropdown-item" href="#">Name</a>
                           <a class="dropdown-item" href="#">Abilities</a>
                         </div>
                       </div>
                       <input type="hidden" id="txt-category">
                        <input type="text" id="txt-search" class="form-control" placeholder="Search for...">
                        <span class="input-group-append">
                              <button id="btn-search" type="submit" class="btn btn-default">
                                  <i class="fa fa-search"></i>
                              </button>
                          </span>
                     </div>
                </form>
             
             </div>
             <div class="col-sm-4">
                  <div class="input-group justify-content-end mb-4">
                      <div class="input-group-prepend">
                         <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <span id="srch-category">Sort By</span>
                         </button>
                         <div class="dropdown-menu">
                           <a class="dropdown-item" href="#">Name</a>
                           <a class="dropdown-item" href="#">Height</a>
                           <a class="dropdown-item" href="#">Weight</a>
                         </div>
                       </div>
                      <button class="btn btn-link" type="button">
                        <i class="fa fa-sort"></i>
                        <i class="fa fa-sort-number-desc" aria-hidden="true"></i>
                      </button>
                 </div>
             </div>
            </div>

            <hr>

            <div class="row mb-2">
               <div class="col-md-12">
                  <div class="d-flex flex-row justify-content-between align-items-center">
                     <h6 class="mx-3">Showing {{ totalPokeman }} Results</h6>
                     <div class="mr-3">
                        <table>
                           <tr><td><span class="mr-1">Per Page:</span></td>
                           <td>
                              <select name="page" class="custom-select" @change="changePerpage($event)">
                              <option value="10" selected>10</option>
                              <option value="20">20</option>
                              <option value="50">50</option>
                            </select>
                            </td></tr>
                          </table>
                     </div>
                  </div>
               </div>
            </div>

            <div class="row mb-2">
               <div class="col-md-12">
                <!-- Result -->
                

                  <div class="container-fluid container-cards-pf">
                  <div class="row row-cards-pf">
                      
                      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="row of listDetail" :key="row.name">
                        <div class="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
                            <div class="card-pf-body" style="height: 262.969px;">
                              <div class="card-pf-top-element">
                                  <span class="card-pf-icon-circle" @click="detailPokemans(row.id)">
                                    <div class="front"><img class="rounded-circle" :src="row.sprites.front_default"></div>
                                    <div class="back"><img class="rounded-circle" :src="row.sprites.front_shiny"></div>
                                  </span>
                              </div>
                              <h2 class="card-pf-title text-center">
                                  {{ (row.name).toUpperCase() }}
                              </h2>
                              <div class="card-pf-items text-center">
                                  <div class="card-pf-item">
                                    <span class="pficon pficon-screen"></span>
                                    <span class="card-pf-item-text">Height: {{ row.height }}</span>
                                  </div>
                                  <div class="card-pf-item">
                                    <span class="card-pf-item-text">Weight: {{ row.weight }}</span>
                                  </div>
                              </div>
                              <p class="card-pf-info text-center"><strong>Abilities:</strong> 
                                <span v-for="(abl,index) in row.abilities" class="badge badge-primary m-1" :key="index+'_'+row.name">{{ abl.ability.name }}</span>
                              </p>
                            </div>
                        </div>
                      </div>

                      <!-- static -->
                      <!-- <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
                            <div class="card-pf-body" style="height: 262.969px;">
                              <div class="card-pf-top-element">
                                  <span class="card-pf-icon-circle"></span>
                              </div>
                              <h2 class="card-pf-title text-center">
                                  Cake Service
                              </h2>
                              <div class="card-pf-items text-center">
                                  <div class="card-pf-item">
                                    <span class="pficon pficon-screen"></span>
                                    <span class="card-pf-item-text">8</span>
                                  </div>
                                  <div class="card-pf-item">
                                    <span class="fa fa-check"></span>
                                  </div>
                              </div>
                              <p class="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br> Never Expires</p>
                            </div>
                            <div class="card-pf-view-checkbox">
                              <input type="checkbox">
                            </div>
                        </div>
                      </div> -->
                      
                  </div>
                </div>


                <!-- Result End -->
               </div>
            </div>

            <div class="col my-3">
                <button class="btn btn-primary float-left" v-if="prevPage" @click="getPokemanIds(prevPage)"><span aria-hidden="true">« Previous</span></button>
                <button class="btn btn-primary float-right" v-if="nextPage" @click="getPokemanIds(nextPage)"><span aria-hidden="true">Next »</span></button>
            </div>
            <br>
       </div>     
    
    <!-- Body End -->


    <!-- Modal -->
    <a class="d-none" data-toggle="modal" data-target="#myModal" id="detailPok">Detail</a>
    <div class="modal fade p-0" id="myModal" tabindex="-1" role="document" data-backdrop="false" data-keyboard="false" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" style="max-width:100%;margin:0;">
          <div class="modal-content">
              <div class="modal-header">
                  <h4 class="modal-title" id="myModalLabel">Detail Pokeman</h4>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-arrow-left"></i> Back</button>
              </div>
              <div class="modal-body p-3" style="height:85vh;overflow:scroll;">
                  <p><b>Name:</b> {{ (detailPokeman.name) }}</p>
                  <p><b>Height:</b> {{ detailPokeman.height }}</p>
                  <p><b>Weight:</b> {{ detailPokeman.weight }}</p>
                  <hr>
                  <h5>Images:</h5>
                  <div class="border d-flex flex-wrap p-2 mb-2 clear-fix">                    
                    <span class="p-2 m-2 float-left" v-for="(pic,index) in detailPokeman.sprites" :key="index">
                        <img :src="pic.value" style="max-width:100px;"><br>
                        {{ pic.key.replace(/_/g, ' ').toUpperCase() }}                    
                    </span>
                  </div>

                  <p v-if="detailPokeman.abilities" class="mt-4">
                    <strong>Abilities:</strong> <br>
                    <span v-for="(obj,index) in detailPokeman.abilities" :key="index">                      
                      <span @click="pokeManOtherDetail(obj.value)" v-if="obj.key == 'url'" class="badge badge-primary cursor mx-1 p-1">{{ detailPokeman.abilities[index-1].value }}</span>
                    </span>
                  </p>

                  <p v-if="detailPokeman.species" class="mt-4">
                    <strong>Species:</strong> <br>
                    <span v-for="(obj,index) in detailPokeman.species" :key="index">                      
                      <span @click="pokeManOtherDetail(obj.value)" v-if="obj.key == 'url'" class="badge badge-info cursor mx-1 p-1">{{ detailPokeman.species[index-1].value }}</span>
                    </span>
                  </p>

                  <p v-if="detailPokeman.types" class="mt-4">
                    <strong>Types:</strong> <br>
                    <span v-for="(obj,index) in detailPokeman.types" :key="index">
                      <span @click="pokeManOtherDetail(obj.value)" v-if="obj.key == 'url'" class="badge badge-warning cursor mx-1 p-1">{{ detailPokeman.types[index-1].value }}</span>
                    </span>
                  </p>

                  <p v-if="detailPokeman.stats" class="mt-4">
                    <strong>Stat:</strong> <br>
                    <span v-for="(obj,index) in detailPokeman.stats" :key="index">                      
                      <span @click="pokeManOtherDetail(obj.value)" v-if="obj.key == 'url'" class="badge badge-success cursor mx-1 p-1">{{ detailPokeman.stats[index-1].value }}</span>
                    </span>
                  </p>


                  <p v-if="detailPokeman.moves" class="mt-4">
                    <strong>Moves:</strong> <br>
                    <span v-for="(obj,index) in detailPokeman.moves" :key="index">                      
                      <span @click="pokeManOtherDetail(obj.value)" v-if="obj.key == 'url'" class="badge badge-secondary cursor mx-1 p-1">{{ detailPokeman.moves[index-1].value }}</span>
                    </span>
                  </p>

                  <p v-if="detailPokeman.game_indices" class="mt-4">
                    <strong>Versions:</strong> <br>
                    <span v-for="(obj,index) in detailPokeman.game_indices" :key="index">                      
                      <span @click="pokeManOtherDetail(obj.value)" v-if="obj.key == 'url'" class="badge badge-danger cursor mx-1 p-1">{{ detailPokeman.game_indices[index-1].value }}</span>
                    </span>
                  </p>

                  <p v-if="detailPokeman.other" class="mt-4">
                    <strong>Others:</strong> <br>
                    <span v-for="(obj,index) in detailPokeman.other" :key="index">                      
                      <span @click="pokeManOtherDetail(obj.value)" v-if="obj.key == 'url'" class="badge badge-dark cursor mx-1 p-1">{{ detailPokeman.other[index-1].value }}</span>
                    </span>
                  </p>

              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-arrow-left"></i> Back</button>
              </div>
          </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'task-pokeman',
    props: [],
    mounted () {
      this.listPokemans();
    },
    data () {
      return {
        defaultPage: 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0',
        totalPokeman: 0,
        nextPage: '',
        prevPage: '',
        perPage: '10',
        listIds: [],
        listDetail: [],
        detailPokeman: {}
      }
    },
    methods: {      
        getPokemanIds( apiUrl = '' ) {
          this.listIds = [];
          const url = apiUrl ? apiUrl : this.defaultPage;
          this.$http.get(url).then( (res) => {
           
            let output = res.data;
            this.totalPokeman = output.count;
            this.nextPage = output.next;
            this.prevPage = output.previous;
            for(let row of output.results) {
              let req = this.$http.get(row.url);
              this.listIds.push(req);
            }
            this.listPokemans();
          }).catch((err) => {
            console.log(err);
          });

        },
        listPokemans() {
          this.listDetail = [];
          this.$http.all(this.listIds)
          .then(responseArr => {
            for(let i in responseArr){
              let output = responseArr[i].data;
              const data = {                
                id: output.id,
                name: output.name,
                height: output.height,
                weight: output.weight,
                abilities: output.abilities,
                sprites: output.sprites
              }
              this.listDetail.push(data);
            }
          });
        },
        detailPokemans(id) {
          this.detailPokeman = {};
          const url = 'https://pokeapi.co/api/v2/pokemon/'+id+'/';
          this.$http.get(url).then( (res) => {
            
            // eslint-disable-next-line no-unused-vars
            function iterateValues(obj, nextedList) {
                for(var k in obj) {
                    if(obj[k] instanceof Object) {
                        iterateValues(obj[k], nextedList);
                    } else {
                        if(k && obj[k]) nextedList.push({key:k, value: obj[k]});
                    }
                }
                return nextedList.length > 0 ? nextedList : null ;
            }
            
            this.detailPokeman =  res.data;
            this.detailPokeman.sprites = iterateValues(res.data.sprites, []);
            this.detailPokeman.moves = iterateValues(res.data.moves, []);
            this.detailPokeman.stats = iterateValues(res.data.stats, []);
            this.detailPokeman.species = iterateValues(res.data.species, []);
            this.detailPokeman.types = iterateValues(res.data.types, []);
            this.detailPokeman.abilities = iterateValues(res.data.abilities, []);
            this.detailPokeman.game_indices = iterateValues(res.data.game_indices, []);
            this.detailPokeman.other = iterateValues(res.data.other, []);

            document.querySelector("#detailPok").click();
          }).catch((err) => {
            console.log(err);
          });
        },
        pokeManOtherDetail(url) {
          this.$http.get(url).then( (res) => { 
              console.log(res.data);
              alert('data fetched');
           }).catch((err) => {
            console.log(err);
          });
        },
        changePerpage(){
          this.perPage = event.target.value;
          this.defaultPage = 'https://pokeapi.co/api/v2/pokemon?limit='+this.perPage+'&offset=0';
          this.getPokemanIds(this.defaultPage);
        }
    },
    computed: {

    },
    created() {
    this.getPokemanIds();
  },
}


</script>

<style scoped lang="css">
.task-pokeman {
  margin: 0;
  padding: 0;
}

.bg-black {
  background-color: #2f3b59;
}

.navbar-brand {
  padding: 11px 20px;
}

.active {
  background-color: blue;
}

.navbar-nav {
  width: 100%;
}

.nav-link {
  color: #fff !important;
}

.nav-item {
  padding: 8px 20px;
  text-align: center;
}

.nav-item:hover {
  background-color: blue;
}

.right {
  margin-left: auto;
}

.navbar-collapse.collapse.in {
  display: block !important;
}

@media (max-width: 992px) {
  .right {
    margin-left: 0;
  }
  .nav-item {
    width: 100%;
    text-align: left;
  }
}

.card-pf {
  background: #fff;
  border-top: 2px solid transparent;
  box-shadow: 0 1px 1px rgba(3, 3, 3, 0.175);
  margin: 0 -10px 20px;
  padding: 0 20px;
}

.card-pf-body {
  margin: 20px 0 0;
  padding: 0 0 20px;
}

.card-pf-body > :last-child {
  margin-bottom: 0;
}

.card-pf-title {
  font-size: 16px;
  font-weight: 400;
  margin: 20px 0;
  padding: 0;
}

.cards-pf .row-cards-pf {
  padding: 0 20px;
}

.cards-pf .row-cards-pf:first-child {
  padding-top: 20px;
}

.container-cards-pf {
  margin-top: 20px;
}

.row-cards-pf {
  margin-left: -10px;
  margin-right: -10px;
}

.card-pf-view {
  border: 2px solid transparent;
}

.card-pf-view .card-pf-info {
  margin-top: 15px;
}

.card-pf-view .card-pf-info strong {
  font-size: 13px;
  margin-right: 10px;
}

.card-pf-view .card-pf-item {
  display: inline-block;
  font-size: 16px;
  padding: 0 13px 0 15px;
}

.card-pf-view .card-pf-item:first-child {
  padding-left: 0;
}

.card-pf-view .card-pf-item:last-child {
  padding-right: 0;
}

.card-pf-view .card-pf-item + .card-pf-item {
  border-left: 1px solid #d1d1d1;
}

.card-pf-view .card-pf-item .fa-check {
  color: #3f9c35;
}

.card-pf-view .card-pf-item .pficon + .card-pf-item-text {
  margin-left: 10px;
}

.card-pf-view .card-pf-items {
  margin-top: 15px;
}

.card-pf-view .card-pf-title {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 0;
  margin-top: 15px;
}

.card-pf-view .card-pf-top-element .card-pf-icon-circle {
  border: 2px solid #39a5dc;
  border-radius: 50%;
  display: block;
  font-size: 46px;
  height: 106px;
  line-height: 102px;
  margin: 0 auto;
  text-align: center;
  width: 106px;
}


.card-pf-view.card-pf-view-select {
  position: relative;
}

.card-pf-view.card-pf-view-select:hover {
  box-shadow: 0 1px 6px rgba(3, 3, 3, 0.35);
}

h2.card-pf-title {
  line-height: 1.1;
}

.front, .back{
  position:   absolute;  
  cursor: pointer;
}
.back{ display:none; }
.card-pf:hover .back{ display: block; }
.card-pf:hover .front{ display: none; }
.cursor {
  cursor: pointer;
}
</style>
