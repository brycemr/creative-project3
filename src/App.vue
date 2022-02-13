<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/hobbyLogo.png">
        </router-link>
      </div>
      <div id="link1">
        <router-link to="/rentals">RENTALS</router-link>
      </div>
      <div id="link2">
        <router-link to="/tutorials">TUTORIALS</router-link>
      </div>
      <div id="link3">
        <router-link to="/about">CONTACT US</router-link>
      </div>
      <div id="signIn">
        <router-link to="/">
          <div class="signIn">
            <img class="icon" src="/images/userIcon.png">
            <p>Sign In</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view/>
    <div id="footer">
    <a href="https://github.com/brycemr/creative-project3">Bryce's Creative Project 3 Github</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.signIn p{
  justify-content: center;
  text-align: center;
}

#menu {
  display: grid;
  grid-template-columns:2fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "brand link1 link2 link3 none";
  background-color: #edeaea;
  padding-bottom: 15px;
}

#menu a {
  color: #03989e;
}

#spacer{
	padding:  2em 0em 2em 0em;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 6em;
}
.icon{
  height: 3.5em;
}
#link1 {
  grid-area: link1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}

#link2 {
  grid-area: link2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}

#link3 {
  grid-area: link3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.box {
  border: 3px solid black;
}
#footer{
  background-color: #edeaea;
  padding: 2px;
}
button {
  background-color: #2c3e50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  test-decoration: none;
  display: inline-block;
}
#button {
  background-color: #2c3e50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  test-decoration: none;
  display: inline-block;
}
</style>
