import React, { Component } from "react";
import Findperson from "./Findperson";
import { useQuery } from "@apollo/client";
import { appLogic, apolloHelper } from "../../../..";
import NoFile from "../../../SIdeHussleComponents/NoFile";

function Findpersons() {
    const {data, loading} = useQuery(apolloHelper.SEARCH_USER_WITH_FILTER,{
      variables:{
        services: ['Electica','plumbing']
      }
    })
    console.log(data)
    return (
      <div className="full-width">
        <div className="container-m">
          <div className="page-title" >Users</div>
        <div className="row">
          {/*sidemenu*/}
          <div className="row col-12 col-md-3">
            <h3 className="pb-4 title3">Filter By</h3>
          </div>

          {/* filtered data */}

          <div className="  col-12 col-md-9 custom-shadow">
            <div
              className="col p-2 align-items-center"
              style={{ border: "1px solid #aaa" }}
            >
              <span className=" mr-2">
                <i className="fa fa-search"></i>{" "}
              </span>{" "}
              <input
                className="filter-input"
                style={{
                  outline: "none",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Search for Person"
              />
            </div>
            <hr className="px-3 my-3" />
            {
              data?.searchUserWithFilter?.map((info,index)=>(
                <div key={`search-${index}`}>

                  <Findperson {...info} />
                </div>
              ))
            }
            {
              data?.searchUserWithFilter?.length < 1 && <NoFile text="No user/organisation found matching the given parameters"/>
            }
          </div>
        </div>
        </div>
      </div>
    );
  }

export default Findpersons;
