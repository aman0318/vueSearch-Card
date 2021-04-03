<template lang="html">
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-3 col-md-3"  v-for="(player,index) in playerslist " :key="index">
             <div class="card img-fluid" >
                    <img class="card-img-top" :src="'/player-images/'+player.Id+'.jpg'" alt="Card image" style="width:100%">
                    <div class="card-img-overlay">
                    <h4 class="card-title ">{{player.PFName}}</h4>
                    <div class=" ">
                        <span class="">Value : $</span>{{player.Value}}
                        <br/>
                        <h6 class="">
                                 Matches :
                     </h6>
                    </div>
      
                        <div v-for="(item,i) in player.UpComingMatchesList" :key="i">
                            {{item.CCode}} vs. {{item.VsCCode}}

                            ({{item.MDate | formatDate}})
                        </div>
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">{{player.PFName}}
                            <br>
                            <span style="font-size:12px;">
                                ({{player.SkillDesc}} )
                            </span>
                        </h6>
                        <p class="card-text"></p>
                     </div>
            </div>
        </div>
    </div>
   
</div>
</template>



<script>
// import axios from 'axios';
import vuefilter from "../assets/filter.js"
export default {
    data(){
      
        return{
            // playerslist:[],
        }
    },
    props:['playerslist'],
    watch:{
        playerslist(){
            
        }
    }
   
    
}
</script>
<style scoped>
.card-img-top {
    width: 76%;
    height: 60%;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
/* margin: 2px 2px; */
margin-top: 10px;
/* padding-left: 40px;  */
}
.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
   
    padding-left: 267px;
}

/* On mouse-over, add a deeper shadow */
.card:hover .card-img-overlay {
    display: inline-block;
    color:white  !important;
    background: #666666bf;
  box-shadow: 0 10px 26px 0 rgba(0,0,0,0.2);
}
.white{
  color:white  !important;  
}
.card-title{
    margin-bottom: .75rem;
    font-weight: 700;
    color: cadetblue;

}
.card-img-overlay{
    display: none;
}
/* Add some padding inside the card container */
.container {
  padding: 2px 8px;
}
.pull-left{
    /* font-weight: 900; */
    float: left;
}
</style>