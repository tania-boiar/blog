import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import { CardData } from "../types/CardData";

type Props = {
  card: CardData;
};

export const ArticleCard: React.FC<Props> = ({ card }) => (
<Grid item xs={12} sm={12} md={6}>
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '6px' }}>
    <CardMedia
      component="div"
      sx={{
        // 16:9
        pt: '42%',
      }}
      image={card.imageUrl}
    />
    <CardContent sx={{ flexGrow: 1, px: "24px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between"}}>
        <Typography variant="overline" color={"#6E798C"}>
          {card.category}
        </Typography>
        <Typography variant="overline" color={"#6E798C"}>
          {card.date}
        </Typography>
      </Box>
      <Typography gutterBottom variant="h5" component="h2" color={"##081F32"} fontWeight={500}>
        {card.title}
      </Typography>
      <Typography color={"#374A59"}>
        {card.shortDescription}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: "space-between", pb: "16px", pl: "16px", pr: "24px", pt: "0px" }}>
      <Button size="small" sx={{ pr: "10px", textTransform: "none", color: "#4C6FFF"}}>
        <Avatar alt={card.author} src={card.avatar} sx={{ mr: "8px" }} />
        {card.author}
      </Button>
      <Button size="small" sx={{ py: "12px", px: "8px", textTransform: "none", color: "#4C6FFF" }}>Read more
        <EastIcon fontSize="small" sx={{ pl: "4px"}}/>
      </Button>
    </CardActions>
  </Card>
</Grid>
)