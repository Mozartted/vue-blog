<template>
	<div class="col-md-12 dq--no-pad">
		<div v-else v-if="$route.path == '/home'" class="footer col-md-12">
			<div class="col-md-12">
				<div class="col-md-10 grid-centered top-padded">
					<div class="col-md-12">
						<div class="col-md-6">
							<h2>Dquest</h2>
							<small>Join the quest and meet amazing coders near you</small>
							<div class="col-md-12">
								<div class="input-group flex-disp dq-search--input" >
									<div class="id-1">
										Subscribe
									</div>
									<div class="id-2">
										<input class="nav-search nav-search-form form-control" placeholder="Subscribe to our newsletter" aria-describedby="basic-addon1">
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="col-md-4 footer--options">
								<h3>Categories</h3>
								<ul>
									<li>Fintech</li>
									<li>Agriculture</li>
									<li>Artificial Intelligence</li>
									<li>Machine Learning</li>
								</ul>
							</div>
							<div class="col-md-4 footer--options">
								<h3>Stacks</h3>
								<ul>
									<li>vue</li>
									<li>Angular 2</li>
									<li>Ember js</li>
									<li>Backbone Js</li>
									<li>React</li>
									<li>Express</li>
									<li>Sails</li>
									<li>Laravel</li>
								</ul>
							</div>
							<div class="col-md-4 footer--options">
								<h3>Ranks</h3>
								<ul>
									<li>Villager</li>
									<li>Warrior</li>
									<li>Chieftan</li>
									<li>Ancestor</li>
									<li>Deity</li>
									<li>God of the Land</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row col-md-12 footer--sub">
				
			</div>
		</div>
		<div v-else class="col-md-12 dq--foot top-marginned top-marginned">
			<div class="container" style="padding:15px;">
				<div class="col-md-9 grid-centered">
					<div class="col-md-2">projects</div>
					<div class="col-md-2">stacks</div>
					<div class="col-md-4 centered dq--text-m dq--text-bold">DEVQUEST</div>
					<div class="col-md-2">categories</div>
					<div class="col-md-2">rank</div>
				</div>	
			</div>
		</div>
	</div>

</template>
<script>
	export default{

	}
</script>