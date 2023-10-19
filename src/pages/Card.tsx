import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
interface Iprops {
  itemId: number;
  name: string;
  description: string;
  imageSrc: string;
  quantity: number;
  price: number;
}

export default function BasicCard({
  itemId,
  name,
  description,
  imageSrc,
  quantity,
  price,
}: Iprops) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post(`http://localhost:3000/list`, {
      itemId: itemId,
      userId: localStorage.getItem("userId"),
      quantity: quantity,
    });
  };
  return (
    <Card
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ minWidth: 275 }}
    >
      <CardMedia component="img" height="140" image={imageSrc} />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="body2">
          Quantity: {quantity} - Price {price}$
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Buy
        </Button>
      </CardContent>
    </Card>
  );
}
