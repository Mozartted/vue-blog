<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 top--padded">
                <div class="col-md-12 vt--card">
                    <h1>404, Sorry the page you seek isnt available</h1>
                    <router-link :to="'/'"><button class="btn btn-success">Go to Ariticles</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
