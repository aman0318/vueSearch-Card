<template>
  <div class="hello">
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Players</a>
                <form  style="width:500px;">
                
                 <select id="name" class="js-example-basic-single form-control" name="state" style="width:300px;" placeholder="Search " v-model="playername">
                     <option value="">ALL</option>
                    <option v-for="(item,index) in playernamelist" :key="index" :value="item.key" >{{item.value}}</option>
                        
 
                </select>
               <button  type="button" class="btn btn-success" style="font-size: 11px;" v-on:click="filterbyname">Search</button>
                </form>
            </div>
        </nav>
      <playersCard  :playerslist="mainlist"/>
  </div>
</template>

<script>

import vuedirective from '../assets/filter.js'
import playersCard from "./PlayersCard.vue"
export default {
  name: 'playersmain',
   components: {
    playersCard
  },

  props: {
    msg: String
  },
  data(){
return{
    list:[],
    playername:"",
    playernamelist:[],
    mainlist:[]
}
  },
  mounted(){
      this.getPlayers();
  },
  methods:{
         getPlayers(){

             axios.get('https://api.npoint.io/d6bd0efc05639084eb17').then(success => {
               this.list=success.data
               this.mainlist =this.list.playerList
              
            // this.list.playerList =    this.list.playerList.sort((a,b)=> (a.Value > b.Value ? 1 : -1))
            // this.list.playerList = _.orderBy(this.list.playerList,'Value','asc');
            var _this = this
            this.list.playerList.forEach(function (arrayItem) {
                var x ={"key" :arrayItem.PDName,
                 "value":arrayItem.PFName}
                console.log(x);
                _this.playernamelist.push(x);
            });

          })
          
           
         },
         filterbyname(event){
             var _this = this
             
             _this.playername = document.getElementById('name').value 
             if(_this.playername !=""){
                this.mainlist = this.list.playerList.filter((item) =>{
                            return item.PDName == _this.playername
                
                 })
             }
             else{
                this.mainlist = this.list.playerList; 
             }
        
     

         }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
