'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

var routeSchema = Schema( {

  color: String, 
  description: String, 
  direction_origin: String, 
  direction_destination: String, 
  direction_origin_stop:String, 
  direction_destination_stop: String,
  fare_class: String, 
  long_name: String, 
  short_name: String, 
  sort_order: Number, 
  text_color: String, 
  type: Number,
  id : String, 
  self: String, 

  rela_id: String, 
  rela_type: String,


  type: String
  
} );

module.exports = mongoose.model( 'Route', routeSchema);

