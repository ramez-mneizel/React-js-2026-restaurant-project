import {
  Avatar,
  Button,
  ButtonBase,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../../Navbar/Navbar";
import { MedicalServices } from "@mui/icons-material";

function MenuManage() {
  const [Services, setServices] = useState([
    {
      id: 1,
      name: "  استشارة عامة  ",
      description: "  فحوصات صحية شاملة من قبل اطباء اصحاب خبرة طويلة   ",
      image: "./src/assets/pizza1.jpg",
      price: "20.00 jd",
    },
    {
      id: 2,
      name: " تحاليل مخبرية ",
      description: "اختبارات دم سريعة و دقيقة",
      image: "",
      price: "35.00 JD",
    },
    {
      id: 3,
      name: "Dental Care",
      description: "  علاجات الاسنان بتقنيات عالية الجودة لتوفير تجربة مريحة ",
      image: "./src/assets/pizza3.jpg",
      price: "45.00 JD",
    },
    {
      id: 4,
      name: "Nutrition and weight managment",
      description:
        " خدمة التغذية وإدارة الوزن لدينا مبنية حول تغييرات حياتية مخصصة ومستدامة , سواء كان هدفك هو إدارة حالة طبية، فقدان الوزن، سيقوم أخصائيو التغذية الخبراء لدينا بإرشادك في كل خطوة من الطريق.  ",
      image: "./src/assets/pizza1.jpg",
      price: 10.99,
      quantity: "30 per month",
    },
  ]);

  const [newItem, setNewItem] = useState({});
  console.log(newItem);
  const [open, setOpen] = useState(false);
  // !true
  // !false
  const handleAddItem = () => {
    setOpen(!open);
  };

  const handleSave = () => {
    if (!newItem.name || !newItem.description || !newItem.price) {
      toast.error("   يرجى تعبئة جميع بيانات الخدمة الطبية ");
      return;
    }
    setServices([services, { newItem, id: services.length + 1, ...newItem }]);
    toast.success("  تم اضافة القسم الطبي بنجاح ");
    setOpen(!open);
    setNewItem({});
  };

  const handleDelete = (id) => {
    const updatedservices = services.filter((service) => service.id !== id);
    setServices(updatedservices);
    toast.error("Deleted Successfully");
  };
  return (
    <>
      <Navbar />
      <Container>
        <Typography
          variant="h3"
          sx={{
            m: 4,
            fontWeight: "bold",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Manage Menu
        </Typography>
        <Button
          textAlign="center"
          variant="contained"
          size="small"
          color="warning"
          onClick={handleAddItem}
        >
          {open ? "Cancel" : "Add New"}
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pizzaMenu.map((pizza) => {
                return (
                  <TableRow key={pizza.id}>
                    <TableCell>{pizza.id}</TableCell>
                    <TableCell>
                      <Avatar
                        variant="rounded"
                        src={pizza.image}
                        sx={{ width: 50, height: 50 }}
                      />
                    </TableCell>
                    <TableCell>{service.name}</TableCell>
                    <TableCell>{service.description}</TableCell>
                    <TableCell>{service.price}</TableCell>

                    <TableCell align="center">
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                      >
                        <Button variant="contained" size="small">
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          color="error"
                          onClick={() => handleDelete(pizza.id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
              {open && (
                <TableRow>
                  <TableCell>{MedicalServices.length + 1}</TableCell>
                  <TableCell>
                    <TextField
                      label="Service image URL"
                      value={newService.image}
                      onChange={(e) =>
                        newService({ ...newItem, image: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Service Name"
                      value={newItem.name}
                      onChange={(e) =>
                        newService({ ...newItem, name: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Service Description"
                      value={newItem.description}
                      onChange={(e) =>
                        newService({ ...newItem, description: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Service Fees"
                      type="number"
                      value={newItem.price}
                      onChange={(e) =>
                        newService({ ...newItem, price: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Quantity"
                      type="number"
                      value={newItem.quantity}
                      onChange={(e) =>
                        newService({ ...newItem, quantity: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Button
                        variant="contained"
                        size="small"
                        onClick={handleSave}
                      >
                        Save
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
export default MenuManage;
