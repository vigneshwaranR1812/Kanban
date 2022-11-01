<template>
    <div class="col-md-3 col-sm-1 p-3">
    
    
    <div class="card">
        <img src="../assets/images/pic2.jpg" class="card-img-top" alt="..." style="height:190px;width:100%;background-position:cover;background-size:cover">
        <div class="card-body">
            <h5 class="card-title">List Name</h5>
            <p class="card-text">Descriptions about list Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae enim aliquid voluptatum nobis, doloribus quis, asperiores sit, libero aliquam doloremque error
                aspernatur rerum tenetur iusto consequuntur quo aperiam fugit reiciendis.</p>
            <div class="row d-flex justify-content-around">
                <div class="col-3">
                    <a href="#" class="btn btn-danger px-3  py-1">Go</a>
                </div>
                <div class="col-3">
                    <a href="#" class="btn btn-danger px-3  py-1">Go</a>
                </div>
                <div class="col-3">
                    <a href="#" class="btn btn-danger px-3  py-1">Go</a>
                </div>
                <div class="col-3">
                    <a href="#" class="btn btn-danger px-3  py-1">Go</a>
                </div>
            </div>
    
        </div>
    </div>
    </div>
</template>
<script>

    export default {
            props: ['image'],
            data(){
                return {
                  
                }
            },
            
            methods:{
                updateImage:()=>{
                    console.log(this.$props)
                    return "../assests/images/";
                }
            },

            
            
    }

</script>
<style></style>