// src/Player.js
import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
  // Style pour la carte
  const cardStyle = {
    width: '18rem',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
    ':hover': {
      transform: 'scale(1.05)'
    }
  };
const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// ✅ PropTypes
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  image: PropTypes.string
};

// ✅ Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 1,
  age: 1,
  image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAjVBMVEUAAADt7e3////+/v7s7Ozu7u75+fny8vL7+/v19fXb29vi4uLAwMCzs7PLy8vOzs6fn5+oqKjV1dVnZ2eMjIxvb2+dnZ25ubl+fn4jIyMyMjKmpqbm5uYpKSkXFxdBQUFfX19UVFR2dnZJSUk6OjqIiIgLCwsUFBQuLi5QUFCUlJQlJSVFRUWKioocHByp83saAAAOqElEQVR4nO1daXvbrBI1mwAv8pbEbuI2zp76TfP/f94FOZaQLHZk2X7u+aRmCjNjSTAzB9CACIAMIoQyIC/lFaTyihaX4LLlaAAEcAYFMiwv5RWk8ooWlziZnBFC6f6PGRUmpO6/XT6QXiLpMeHFpbwimbzKiss0cko5p2Q0XIzns7u72Xw8HXEk/kQT9a+XFw4Kj8tbjg+3HKq3PEYuf9zhZP33z6CO++XdFHAIO9VfOijw80wXtxwV/6G45VFyQsSjma8/BzpsV/TnkepEPwAmB7GlA5tc/o2Pbr613u1xm+9tSa4fFw52OKhgQqdLi3cFXueAkuT6fxzknSGDQyf3JL7njHVjhX6aAJZfzCIXU8KNq3vFXZxCklL/QX5wUA6rxS3dP9O4fKZxkBwAPv7t45/AekOT6S/l+4ketBioduAvJ3Tt6Z7Ar5wfDxph+kHloJwrcDVvHBTUQiFPuRhfpvf+/gk88BT6VTkaUImMCWTFpbxivLoMkCN4F+SewDpD8fpr8p9pAlteWg85ppunUP/EpEgBjtPfnCbKUI2o0Tk6DoVc5XT6K9y/wWAp+orSX5croRq2RApucsTnMe7Je8hJhP7jSCZtLAqh1+TXih1PGouWz/Ah1MGaZ9xNHjA7HGFFw/U35WDwkz+Jse+QX4nLIr+ickBDPnJKbxP4NxhQHqa/Rc6qSKb8RTSRgoM8kX+DZyqy4wD9LXKkCdXAcQd2OU/kn8DLbMO99esjmeOiTUuGbJOnef8q7Dz1t8trRSdQvbSgbeI0yhF8SOqfyC9GPvp18kEm8ZPA1S9b/6iVs3Fi/wTGzF2/Tj5o+0WAJf86lmO6SO+fmDC4o36tHBxV1RqhTmv0fiwnWF9XikFO3fRr5caqmkfRhz934t/g18ZNv1aeqOiUrbrxT0SmRV01puhU5U+8mV+Ren6llyPy0ZWDgwWKs2+AJX48lvgZNAQOsZ1NLn67jh5QiReRIMbYl6Amg2nenX9irqBxNZl4BwF96dLBJY8vOrXya7UM2SSnky79GwxGMfal4Afpq5uhv/8+39w9TCYPu+e/PoPSnCbiB2lxqeffNHLo8gZ+306GfK9bxk+QbSbLd0cHtzDGvnh+ENpraNsxFglerb10deL27r5n/fKDQ5uByxHkgOBae3nJaJb/dfFw0S8/+Ga27ntcBcNHBlA+cXgb5/2GamZ+84kb2hMxBPOt1cF1Cn6wyqTkdflHnlnkzDzE7FBmaF/8k1kLAY8o3L4skh9E5jrFRFfmU/vnO4uD78dlRFf7EvCDJhZwBV34PcL/WTwcMRRqX2yoBrHBrhlk9fa4ZVAoTLFQ3YsjB13ti+YHoSERXBYlyqo9wzKn+XmE6hk4NfM1OQu1L5ofNLyC3xjV2iPGFw/r5XK5fhhmWa1/YvqdBFYsmh90f2lVuci59MHICqpFKUzovIpZPyeN/s3x7DjDQfapE72OXzPxb2J8ANqA8lWuk1Hab+pBywuu9U+NpNsq64sfJPo4bVULpQho3qI/G6bKNyYHJ1mgfSCWH9Tn8u+w1p4fj5OfXJHjbGtzsBd+kGoHh7XaHmVtOfENVfqnpnULqyzQPlDxg8g5/1PlUJvMr2itfduqkndeyRmcGhyco0D7kEqf1Z5pA/+myvWEy1Dl9zRFjRyW/SNoegknLNA+FMsPwpnGpD+45uBj6396qByEkBgcHLNA+1AsP6h18J6WBoicSPP47WSwfsjwucHBfB+q9cEP6qavV1oWZgHmmpx4p/aPmiueFSxYqH2x/CDTOfhb+Z+caRauPTC10//0DoKsI36QaH6xgxzrp4mRmBsO7XXRQE6VYR4baheh9hEQxw+KSEY70W8LBaK9+I+aZOiLq/0balf/9cUPApNZdz/tEdRx20Oi9K9/FgaDpx6LToYH64bJ3S1E698cKoMCyQxLUOKKTgZ+rZFftckzQ2Hzfr4YDVe6ZP0N1vo3zfN3MNi+eH4wdO3dktf7N9WuJqQ/flD7ANr8qy/VQsbyeE774wchDfJvLfxT+2dGlmLTKz/YHmaaMWNq/2JMMJb/f9MO+EFsGbUqua1q24JVfdTDlkXCTzzGvjh+kHI68nXvPef1/i0lNRGypuEHSSM61xR1FDnm4+0v3xXon0Pa4Bdti7zHMNC+aH6Q65IlA142lKj9E/sei03M/sIIfhAxU5VBg7+M1gwg1EIvityZ6RzsOlSD/gt8v1ijf+KwAe91lIAf9F8fKpJB29bOI7yPsnqn1GmPzAfWG2XND8P5QeI9fg5WFNf619RqjrCGAfaZ+cF6pNAqJ95LYJdZrf8MuO4w/BOzKB2YQx19KES9x5giATwM65gO3WeYUWSoFsQPei9ifqNEGfXowmO1Ux5gn50ftOVfvu/gRm3Ph64LnSRWMMA+HssPmiqZLXhiantTjekYExpgXzQ/iPzWoc+yqj2DfiswVzTAvlh+EMGtl5E5r9ozzxWYU+pvXzw/iPwypU3VHrSyTQaMSIB90fyg316Xb1K2x6YiaBv+UIKj+EFgya/a5dxrlLmHVXtrhtTACwyxLwE/6DNSvFbtvcP0NWy+cyfiB322y3/Cqj3z3GYx6Ysf9HqVKDu092snMOyLH0Q+9YoxKtt7Fqp+0774Qeaz4+Ury/arOjPu+YS+wVD+UuEHiYV/a5d7TRTP+/bEeytzHmwfiN0/iA288zGe5J5Vvth6+ldfdX/a/YO+2wYfb2/9K+G3fRWd5EqnTrdl/WDc2f5Bh/yLO27ricB7FmFfPD8Ye/aIHc+81/2DzNNcnzx+j773D/pM2v/yDeYLvwMTXqk9lOyUH9w4zxRPI3kEh3hqvMox84LLCLYvnh80L0ZWcIvI/h1BcOTu4Tcg1TsWYl+C/YNugckrrc7/5O4R0AxG2hfDD/7we8yJYBhTpWSBXM/terXrN8uTnC8Kd/Ya/Ef5zshGyPVggfKoh1D7Ep0vag9oXjK16sWMi+wrzOhZnC9qXo+8x5ar7Zl99YlMNec8ZNN0Mn5QpQqtZcAXqDbK7GX/yTCnKCD/S8cPqnL7SPotT4wt2zsMo1PKi/qUZ6k+IT+oRhLIftzRQik6QYdSACbu+rvhB1UFzF5GevoZ1YpG9v/+yD30d3++KGP22GQHy7oot2e9a4499HfDD6pyFyLmdpOJduK1WjgU41ah+V9CfrC2/8/pzLHdFNPhyuG3GAxookOVU50v6kun2PAXntn5ojhx7WIGz+18UetmeD+M4LmdL5r2GX301q+T2/lB4Ch3OHXFHXfUW383+wcVeejy9FYolLWr/m72D6pyZthd5YklC9Df/fmiActjNZjyAP3dny8atsOgBV8h+v34Qdv6zPakMNVMscqC9LfL5TRR3tL9L0JIya/J4NVZzh0ibieMSZD+VvnxqVye/FtNnugEuTEJ1G8O1WKKTocVvGkd9NbfGqqVL2WCj8qkczBMf4s8lh+sy0EiB3l0fpqOH1TkDPgvU2/FNEx/Z+eLlvKAdfityAP1d1d0OmsH20M1Qlz5QUWe0MEg/d3wg5U82TuYh+l35AdBxa8BXf6lkSebJmiY/lZ5PD+oyBPOg0H6W+Rpvz+YOJLx1t8iT/v9wf+Hao4Otp5GGcUPJsq/HHlbG3KWJD9NyQ8mD9VC9HfID+K0E/00UH/XoRrjiRLeO8hxgP4O+UGpAEIe/FG+Jv5tqrMuzoIflCfbobnX8mYL1pvMen7oKfnBDDwkKjiV2HEYOeil4wchnHTwSZv3O8zVR64vflC4l3+ld0/i1wOlvfODBA5T0koN3K94dCx6lF/58G+ED9N90K0VX4uisBtoHzjmB0GRVOn5t5oc8vjvRVqxHKrnz3jZV070Yfwbh5OUM4MebxvUfOdOwA9Snocc5xSE94k8k/yk/KB4+banck/icQFtXwhx4Ac9JnZ8gpevjmcQ9rXzIH4QraK+JRyIWcZC+EFUu6Ulv1a8tM3gFRZyvuhw5jPhfgrN9rXY38IPAjP/RrHt6xAd4pbIg+bM/CDQhWpORR0IV66n3HSDOacdFp1E844DFzsec04wa7evNZvwya9OsJnOAW/Ehz/04Afh4mQzuxm/cgbS84O+h490iuWIHtKjJPyg/IWG3W9m9cDHhBNHB534QYZOHrnYsB0pJwxF8oOETz0PuDkJJoZRv8EPQj2/JvIryM7u9u2xHdHaHWuzX8cPlpEAOLe3r4YJ1/CDbpHM/o9nNHgeY2n60vK+JmMO1fi5zH06vOf7xXhhoRpx2+/RL96YnR+k7fkVAtu+rXfB65AF8YOE5d194TotdlApOjUzel3RiVC/Ewt6xZYedsoYQzVQ/QdMh2c+utTxPYXq/kQ7P5iKyzwddpC584OIX9DjecAWczd+EIMLezwP+JjC6pujUM8PGj+/ct6YyRtk4QcRoWcdm5lxezioXIlkmqGa96lnZ4UvTpuxaCN/Qtu+bYzD50iMpDp+UDyzti/inj/uJScs80PQwg9eVPSiwwvT84PplvL0iVtYc1ApOp3knLsT4EHDDzLs/X2FM8WIK9lElT+hK3gB9/hiR/ygrHRfyQMqMZdMZp0fFPnfRQagGvDjUO1yI9A23MBm0Qmbvyd+caBNftDjsLqLwB1s8oMXH6PV8UEb/KDpQ8YXiRWtF53OgpxOiVteD9W2fRuUGh81fpBlfduTHjmv+EGUXdkYKjHbHzW6n+izC67D6LCESqiWXdkkIfFbKTohfo4cfCw2pArVSOptHeeABSn5wVQb/84LY1byg6nPtTsPTKpQzftDdBeBeTXR+39K8BIwq0I1cs0OFknTlTpY8YNXVG+qMKMVu3SlDlah2pU6ePV3sArVrnOQKTarF9PEtY6i5UR/1fPg1Tt49ZHMNd/Bkh9kV+ngQ3bgByG8ynRpokQyuG9jusBUcTDraU9nl/jDlZVO2cUtD7XjDar84BXWDTGr8YNXV3Z6oDV+EMGroujlJ1WaS7mSnlXfO2740Vo1CDcXvVJUxdOUHw69Qv8DU+KhrkTypKoAAAAASUVORK5CYII="
};

export default Player;