import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import React,{useState} from 'react';
import AddItem from './components/AddItem';


function App() {
    const products = [
        {
            price: 99999,
            name: "Iphone 10s Max",
            quantity: 0,
        },

        {
            price: 9999,
            name: "Redmi 10s Max",
            quantity: 0,
        }
    ]

    let [productList , setProductList] = useState(products)
    let [totalAmount , setTotalAmount] = useState(0);
    let [totalItem, setTotalItem] = useState(products.length);

    const incrementQuantity = (index) => {
        let newProductList = [...productList];
        let newTotalAmount = totalAmount;
        newProductList[index].quantity++;
        newTotalAmount += newProductList[index].price;
        setTotalAmount(newTotalAmount);
        setProductList(newProductList);
    }

    const decrementQuantity = (index) => {
        let newProductList = [...productList];
        let newTotalAmount = totalAmount;
        if (newProductList[index].quantity > 0) {
            newProductList[index].quantity--;
            newTotalAmount -= newProductList[index].price;
        }
        else{
            newProductList[index].quantity = 0;
        }
        setTotalAmount(newTotalAmount);
        setProductList(newProductList);
    }

    const resetData = (index) => {
        let newProductList = [...productList];
        newProductList.map((products) => {
            products.quantity = 0;
        })
        setProductList(newProductList);
        setTotalAmount(0);
        // setTotalItem(newProductList.length);
    };

    const removeItem = (index) => {
        let newProductList = [...productList];
        let newTotalAmount = totalAmount;
        newTotalAmount -= (newProductList[index].quantity * newProductList[index].price);
        newProductList.splice(index,1);
        setProductList(newProductList);
        setTotalItem(newProductList.length);
        setTotalAmount(newTotalAmount);
    };

    const addItem = (name,price) => {
        let newProductList = [...productList];
        newProductList.push({
            price:price,
            name:name,
            quantity:0,
        });
        setProductList(newProductList);
        setTotalItem(newProductList.length);
    }

    const totalProduct = (index) => {
        // let
    }

  return (
    <>
        <Navbar totalItem={totalItem}/>
        <main className='container mt-5'>
            <AddItem addItem={addItem}/>
            <ProductList productList = {productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
        </main>
        <Footer totalAmount={totalAmount} resetData={resetData}/>
    </>
  );
}

export default App;
