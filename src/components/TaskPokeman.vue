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
                     <h6>Showing 291 tasks</h6>
                     <div class="right-sort">
                        <table>
                           <tr><td><span class="mr-1">Per Page:</span></td><td>
                        
                        <select name="page" class="custom-select">
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
                
                <!-- Result End -->
               </div>
            </div>

            <div class="d-flex justify-content-end text-right mt-2">
               <nav>
                  <ul class="pagination">
                     <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                     <li class="page-item"><a class="page-link" href="#">1</a></li>
                     <li class="page-item active"><a class="page-link" href="#">2</a></li>
                     <li class="page-item"><a class="page-link" href="#">3</a></li>
                     <li class="page-item"><a class="page-link" href="#">4</a></li>
                     <li class="page-item"><a class="page-link" href="#">5</a></li>
                     <li class="page-item disabled"><a class="page-link">...</a></li>
                     <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                  </ul>
               </nav>
            </div>

       </div>     
    
    <!-- Body End -->


    <!-- Modal -->
    <a class="d-none" data-toggle="modal" data-target="#myModal">Detail</a>
    <div class="modal fade p-0" id="myModal" tabindex="-1" role="document" data-backdrop="false" data-keyboard="false" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" style="max-width:100%;margin:0;">
          <div class="modal-content">
              <div class="modal-header">
                  <h4 class="modal-title" id="myModalLabel">Detail Pokeman</h4>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
              </div>
              <div class="modal-body" style="height:85vh;">
              <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
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
        list: []
      }
    },
    methods: {
        listPokemans() {
          console.log('-----');
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .task-pokeman {
    margin:0;
    padding:0;
  }

  .bg-black {
    background-color: #2F3B59;
  }

  .navbar-brand {
    padding: 11px 20px
  }

  .active {
    background-color: blue
  }

  .navbar-nav {
    width: 100%
  }

  .nav-link {
    color: #fff !important
  }

  .nav-item {
    padding: 8px 20px;
    text-align: center
  }

  .nav-item:hover {
    background-color: blue
  }

  .right {
    margin-left: auto
  }

  .navbar-collapse.collapse.in {
    display: block !important
  }

  @media (max-width: 992px) {
    .right {
      margin-left: 0
    }
    .nav-item {
      width: 100%;
      text-align: left
    }
  }

  .card-pf {
    background: #fff;
    border-top: 2px solid transparent;
    box-shadow: 0 1px 1px rgba(3, 3, 3, .175);
    margin: 0 -10px 20px;
    padding: 0 20px;
  }

  .card-pf-body {
    margin: 20px 0 0;
    padding: 0 0 20px;
  }

  .card-pf-body>:last-child {
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

  .card-pf-view .card-pf-item+.card-pf-item {
    border-left: 1px solid #d1d1d1;
  }

  .card-pf-view .card-pf-item .fa-check {
    color: #3f9c35;
  }

  .card-pf-view .card-pf-item .pficon+.card-pf-item-text {
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

  .card-pf-view .card-pf-view-checkbox {
    position: absolute;
    top: 11px;
    left: 15px;
  }

  .card-pf-view .card-pf-view-checkbox input[type=checkbox] {
    display: none;
  }

  .card-pf-view.card-pf-view-select {
    position: relative;
  }

  .card-pf-view.card-pf-view-select:hover {
    box-shadow: 0 1px 6px rgba(3, 3, 3, .35);
  }

  .card-pf-view.card-pf-view-single-select {
    cursor: pointer;
  }

  h2.card-pf-title {
    line-height: 1.1;
  }
</style>
