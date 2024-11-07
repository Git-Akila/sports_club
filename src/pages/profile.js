import React, { useEffect, useState } from "react";
//import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Select from "react-select";
import "../../src/i2.css";
import Navbar from "../components/Navbar";
import { useForm, Controller } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const inputBlog = [
  { label: "firstName", value: "John" },
  { label: "lastName", value: "Brahim" },
  { label: "address", value: "Developer" },
  { label: "phone", value: "7897897898" },
  // { label: "profession", value: "cricketer" },
];

const options2 = [
  { value: "1", label: "Select" },
  { value: "2", label: "Male" },
  { value: "3", label: "Female" },
  { value: "4", label: "Other" },
];

const EditProfile = () => {
  const [data, setData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      // const headers= {
      //   'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiVGVzdEBnbWFpbC5jb20iLCJpZCI6IjY3MTlmNDE2OWUzYzI2MTc4ZTBjNGY0ZSJ9LCJpYXQiOjE3MzA4ODEyMDEsImV4cCI6MTczMDk2NzYwMX0.-ebdlPe2cw0k3_vQhCozqmjAnKZaZwDv0BO7dGMdVnM`,
      //  'Content-Type': 'application/json'
      //  };

      // const response = await axios.post("http://192.168.0.121:8080/user/updateprofile", { data ,headers
      //   ,});

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://192.168.0.121:8080/user/updateprofile",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiVGVzdEBnbWFpbC5jb20iLCJpZCI6IjY3MTlmNDE2OWUzYzI2MTc4ZTBjNGY0ZSJ9LCJpYXQiOjE3MzA4ODEyMDEsImV4cCI6MTczMDk2NzYwMX0.-ebdlPe2cw0k3_vQhCozqmjAnKZaZwDv0BO7dGMdVnM",
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          toast.success(response.data.message);
        })
        .catch((error) => {
          toast.error(error);

          console.log(error);
        });
      // const response = axios({
      //   method: 'post',
      //   url: 'http://192.168.0.121:8080/user/updateprofile',
      //   data: data, // you are sending body instead
      //   headers: {
      //    'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiVGVzdEBnbWFpbC5jb20iLCJpZCI6IjY3MTlmNDE2OWUzYzI2MTc4ZTBjNGY0ZSJ9LCJpYXQiOjE3MzA4ODEyMDEsImV4cCI6MTczMDk2NzYwMX0.-ebdlPe2cw0k3_vQhCozqmjAnKZaZwDv0BO7dGMdVnM`,
      //   'Content-Type': 'application/json'
      //   },
      // });∏
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://192.168.0.121:8080/user/getprofile",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiVGVzdEBnbWFpbC5jb20iLCJpZCI6IjY3MTlmNDE2OWUzYzI2MTc4ZTBjNGY0ZSJ9LCJpYXQiOjE3MzA4ODEyMDEsImV4cCI6MTczMDk2NzYwMX0.-ebdlPe2cw0k3_vQhCozqmjAnKZaZwDv0BO7dGMdVnM",
          "Content-Type": "application/json",
        },
      };

      axios
        .request(config)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("getprofile err", error);
    }
  }, []);
function handlechange (e){
  console.log("e.target.files",e.target.files[0]);
  const eventData = new FormData();

  eventData.append("thumbnail", e.target.files[0]);
  try {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://192.168.0.121:8080/user/update-ProfilePic',
      headers: { 
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiVGVzdEBnbWFpbC5jb20iLCJpZCI6IjY3MTlmNDE2OWUzYzI2MTc4ZTBjNGY0ZSJ9LCJpYXQiOjE3MzA4ODEyMDEsImV4cCI6MTczMDk2NzYwMX0.-ebdlPe2cw0k3_vQhCozqmjAnKZaZwDv0BO7dGMdVnM', 
        
      },
      data : eventData
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  } catch (error) {
    console.log("thumbnail eerr",error);
    
  }
}
  // const [selectOption , setSelectOption] = useState('Gender');
  return (
    <>
      <Navbar />

      {/* <Navbar toggle={() => dispatch({ type: "TOGGLE_SIDEBAR" })} /> */}
      <ToastContainer
        position="bottom-right"
        // className="bg-green-300"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section class="pb-4 bg-gray-50 mt-4 container sm:py-16 lg:py-24">
        <section class="  ">
          <h2 class=" text-3xl pl-10 font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            User Profile
          </h2>
        </section>

        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="clearfix">
              <div className="card card-bx profile-card author-profile m-b30">
                {data && (
                  <div className="card-body">
                    <div className="p-5">
                      <div className="author-profile">
                        <div className="author-media">
                          <img
                            src={data.data.ProfilePic}
                            alt=""
                            className="h-28 w-36"
                          />
                          <div
                          className="upload-link"
                          title=""
                          data-toggle="tooltip"
                          data-placement="right"
                          data-original-title="update"
                          
                        >
                          <input type="file" className="update-flie" onChange={handlechange} />
                          <i className="fa fa-camera"></i>
                        </div>
                        </div>
                        <div className="author-info">
                          <h6 className="title">{data.data.firstName}</h6>{" "}
                          <h6 className="title">{data.data.lastName}</h6>
                          <span>{data.data.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="info-list">
                      <ul>
                        <li>
                          <Link to={"/app-profile"}>Phone</Link>
                          <span>{data.data.phone}</span>
                        </li>
                        <li>
                          <Link to={"/uc-lightgallery"}>Profession</Link>
                          <span>{data.data.profession}</span>
                        </li>
                        <li>
                          <Link to={"/app-profile"}>Lessons</Link>
                          <span>{data.data.city}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                <div className="card-footer">
                  <div className="input-group mb-3">
                    <div className="form-control rounded text-center bg-white">
                      Portfolio
                    </div>
                  </div>
                  <div className="input-group">
                    <a
                      href="https://www.dexignzone.com/"
                      target="blank"
                      className="form-control text-primary rounded text-start bg-white"
                    >
                      https://www.dexignzone.com/
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="card profile-card card-bx m-b30">
              <div className="card-header">
                <h6 className="title">Account setup</h6>
              </div>
              <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <div className="row">
                    {inputBlog.map((item, ind) => (
                      <div className="col-sm-6 m-b30" key={ind}>
                        <label className="form-label">{item.label}</label>
                        <input
                          type="text"
                          className="form-control"
                          name={item.label}
                          defaultValue={item.value}
                          {...register(item.label)}
                        />
                        {errors[item.label.toLowerCase()] && (
                          <span className="text-red-600 text-sm">
                            This field is required
                          </span>
                        )}
                      </div>
                    ))}

                    <div className="col-sm-6 m-b30">
                      <label className="form-label">Gender</label>
                      {/* <select
                  className="custom-react-select"
                  id="selectmethod"
                  defaultValue=""
                  name="gender"
                  {...register("exampleRequired", { required: true })}
                >
                  <option value="" disabled>Select Option</option>
                  <option  value="1">Blue</option>
                  <option  value="2">Red</option>
                </select> */}
                      {/* <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                      </select> */}
                      <Select
                        options={options2}
                        className="custom-react-select"
                        defaultValue={ options2[0]}
                        isSearchable={false}
                      />

                      {/*   {countryValue && (
          <Controller
            name="country"
            control={control}
            render={({ onChange, value, ref }) => (
              <Select
                options={options2}
                value={options2.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
                defaultValue={country.find((c) => c.value === countryValue)}
              />
            )}
            rules={{ required: true }}
          />
        )}
        {errors.country && <div>Field is rquired</div>} */}
                    </div>
                    <div className="col-sm-6 m-b30">
                      <label className="form-label">Birth</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="dd. mm .yyyy"
                        name="dob"
                        {...register("dob")}
                      />
                    </div>

                    <div className="col-sm-6 m-b30">
                      <label className="form-label">Pin code</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="788799"
                        name="pincode"
                        {...register("pincode")}
                      />
                    </div>
                    <div className="col-sm-6 m-b30">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Chennai"
                        name="city"
                        {...register("city")}
                      />
                    </div>
                    {/* <div className="col-sm-6 m-b30">
                      <label className="form-label">State</label>
                      <Select
                        options={options3}
                        className="custom-react-select"
                        defaultValue={options3[0]}
                        value={options3}
                        isSearchable={false}
                        {...register("options3")}
                      />
                    </div> */}
                    <div className="col-sm-6 m-b30">
                      <label className="form-label">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="India"
                        name="country"
                        {...register("country")}
                      />
                    </div>

                    <div className="col-sm-6 m-b30">
                      <label className="form-label">Profession</label>
                      <select {...register("profession")}>
                        <option value={"Cricket"}>Cricket</option>
                        <option value={"Volleyball"}>Volleyball</option>
                        <option value={"Kabbadi"}>Kabbadi</option>
                        <option value={"Basketball"}>Basketball</option>
                        <option value={"Hockey"}>Hockey</option>
                        {/* <option >Kabbadi</option> */}
                      </select>
                      {/* <Select
                        options={options2}
                        className="custom-react-select"
                        defaultValue={options2[0]}
                        isSearchable={false}
                      /> */}
                    </div>
                    {/* <div className="col-sm-6 m-b30">
                      <label className="form-label">City</label>
                      <Select
                        options={options4}
                        className="custom-react-select"
                        defaultValue={options4[0]}
                        isSearchable={false}
                      />
                    </div> */}
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">UPDATE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default EditProfile;
