<template>
    <NavBar />
    <div id="homepage">
       <div class="rows">
            <div class="cols">
                <h1>Move your project through a visual pipeline from start to finish</h1>
                <!-- <div class="btns">
                    <a href="/login">Login</a>
                    <a href="/signup">Sign Up</a>
                </div> -->
            </div>
            
       </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
    
   components:{
        NavBar
   }
}
</script>
<style scoped>
.img {
    background: linear-gradient(45deg, rgba(255, 56, 56, 0.7), rgba(224, 29, 29, 0.4)), url("../assets/images/homepage.jpg");
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
}
#homepage{
        background: linear-gradient(45deg, rgba(255, 56, 56, 0.3), rgba(0, 0, 0, 0.4)), url("../assets/images/homepage.jpg");
        width: 100%;
        height: 89vh;
        max-height: 88vh;
        background-position: center;
        background-size: cover;
        position: relative;
        overflow: hidden;
        
}
.rows{
    display: flex;
    width:100%;
    justify-content: space-around;
    align-items: center;
    
}
.cols{
    align-items: center;
    flex-basis: 80%;
    margin: auto;
    padding: 30vh 10vh;
    
    color:#fff;
    font-weight: 900;
}
h1{
   
    color: #fff;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Roboto Mono', monospace;
    text-transform: uppercase;
        background-image: linear-gradient(-225deg,
                #fff 0%,
               #fff  29%,
               #fff  67%,
               #fff  100%);
        background-size: auto auto;
        background-clip: border-box;
        background-size: 100% auto;
        color: #fff;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 2s linear infinite;
        display: inline-block;
        font-size: 60px;
        text-align: center;
    }
    
    @keyframes textclip {
        to {
            background-position: 0% center;
        }
}
/* .btns{
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top:70px;
    margin: auto;

}
.btns a{

    color: #fff;
    text-decoration: none;
    display: inline-block;
    margin: 70px 30px 0;
    padding: 5px 20px;
    border: 3px solid #ff1361;
    border-radius: 30px;
    font-size: 20px;
    font-weight: 500;
    transition: 0.7s;
}
.btns a:hover{
    background: #ff1361;
    border: 3px solid #fff;
} */
@media only screen and (max-width: 700px) {
   
        /* .btns a {
            padding: 4px 15px;
            font-size: 10px;
        } */
        h1{
            font-size: 40px;
        }
}
</style>