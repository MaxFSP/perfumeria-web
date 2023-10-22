import { Container, Typography, Grid, Paper, Button } from "@material-ui/core";

const About = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        About Our Perfume Store
      </Typography>

      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <Typography variant="h4" gutterBottom>
          About the Company
        </Typography>
        <Typography>
          Welcome to [Your Perfume Store], your premier destination for a
          carefully curated collection of exquisite fragrances. Founded in [Year
          of Establishment], we are dedicated to providing a selection of scents
          that cater to your unique preferences.
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <Typography variant="h4" gutterBottom>
          Location
        </Typography>
        <Typography>
          Visit us at our physical store located at:
          <br />
          123 Perfume Street
          <br />
          Cityville, Perfumeland
          <br />
          Zip Code: [Your Zip Code]
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <Typography variant="h4" gutterBottom>
          Our Goals
        </Typography>
        <Typography>
          Our primary goal is to offer a memorable fragrance shopping
          experience. We strive to help you discover scents that reflect your
          personality and make you feel confident and beautiful. Quality,
          authenticity, and customer satisfaction are our core values.
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <Typography variant="h4" gutterBottom>
          Connect with Us on Social Networks
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              href="https://www.facebook.com/yourperfumestore"
            >
              Facebook
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              href="https://www.twitter.com/yourperfumestore"
            >
              Twitter
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              href="https://www.instagram.com/yourperfumestore"
            >
              Instagram
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography>
          Your privacy is important to us. Please read our{" "}
          <a href="/privacy-policy">Privacy Policy</a> to understand how we
          protect your personal information and ensure a secure shopping
          experience.
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: "16px" }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography>
          If you have any questions or concerns, our friendly customer support
          team is here to assist you. Reach out to us through our{" "}
          <a href="/contact">Contact Page</a> or email us at
          [contact@yourperfumestore.com].
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
