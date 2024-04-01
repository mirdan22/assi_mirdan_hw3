
const app = Vue.createApp({
  data() {
    return {
      musicsData: [
        {
          "title": "Blinding Lights",
          "released_date": "November 29, 2019",
          "featured_artists": ["None"],
          "listeners": "Over 3 billion streams on Spotify",
          "album": "After Hours (2020)",
          "awards": ["Billboard Music Award for Top Hot 100 Song (2021)", "American Music Award for Favorite Soul/R&B Song (2020)"]
        },
        {
          "title": "Save Your Tears",
          "released_date": "August 9, 2020",
          "featured_artists": ["None"],
          "listeners": "Over 900 million streams on Spotify",
          "album": "After Hours (2020)",
          "awards": ["None"]
        },
        {
          "title": "Heartless",
          "released_date": "November 27, 2019",
          "featured_artists": ["None"],
          "listeners": "Over 700 million streams on Spotify",
          "album": "After Hours (2020)",
          "awards": ["None"]
        },
        {
          "title": "Starboy (feat. Daft Punk)",
          "released_date": "September 22, 2016",
          "featured_artists": ["Daft Punk"],
          "listeners": "Over 1 billion streams on Spotify",
          "album": "Starboy (2016)",
          "awards": ["Grammy Award for Best Urban Contemporary Album (2018)"]
        },
        {
          "title": "Can't Feel My Face",
          "released_date": "June 8, 2015",
          "featured_artists": ["None"],
          "listeners": "Over 1 billion streams on Spotify",
          "album": "Beauty Behind the Madness (2015)",
          "awards": ["Billboard Music Award for Top R&B Song (2016)"]
        },
        {
          "title": "The Hills",
          "released_date": "May 27, 2015",
          "featured_artists": ["None"],
          "listeners": "Over 1 billion streams on Spotify",
          "album": "Beauty Behind the Madness (2015)",
          "awards": ["Juno Award for Single of the Year (2016)"]
        },
        {
          "title": "In Your Eyes",
          "released_date": "March 24, 2020",
          "featured_artists": ["None"],
          "listeners": "Over 600 million streams on Spotify",
          "album": "After Hours (2020)",
          "awards": ["None"]
        },
        {
          "title": "Lost in the Fire",
          "released_date": "January 11, 2019",
          "featured_artists": ["Gesaffelstein"],
          "listeners": "Over 300 million streams on Spotify",
          "album": "Hyperion (Gesaffelstein's album)",
          "awards": ["None"]
        },
        {
          "title": "Love Me Harder",
          "released_date": "September 30, 2014",
          "featured_artists": ["Ariana Grande"],
          "listeners": "Over 700 million streams on Spotify",
          "album": "My Everything (Ariana Grande's album)",
          "awards": ["None"]
        },
        {
          "title": "Pray For Me",
          "released_date": "February 2, 2018",
          "featured_artists": ["Kendrick Lamar"],
          "listeners": "Over 600 million streams on Spotify",
          "album": "Black Panther: The Album (2018)",
          "awards": ["Grammy Award for Best Rap/Sung Performance (2019)"]
        }
      ],
      selectedMusic: null,
      error: null,
      artistName: "The Weeknd"
    }
  },
  methods: {
    getMusic(music) {
      this.selectedMusic = music;
    }
  }
});

app.mount('#app');




gsap.from(".col-span-full", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".col-span-full",
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play none none none"
  }
});

gsap.from("#music-list li", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#music-list",
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play none none none"
  }
});

gsap.from("#musicInfoCon", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#musicInfoCon",
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play none none none"
  }
});

gsap.from("#music", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#music",
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play none none none"
  }
});