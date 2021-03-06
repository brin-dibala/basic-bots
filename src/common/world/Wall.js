'use strict';

const    Matter = require('matter-js');
const    World = require('matter-js').World;
const    Bodies = require('matter-js').Bodies;


class Wall {
  constructor() {
    this.class = Wall;
  }

  static get_height(){
    return 10;
  }

  static get_width(){
    return 10;
  }
      create(world, position){


          this.body =  Bodies.circle(position.x, position.y, Wall.get_width(), {
            density: 10.0,
            friction: 0.5,
            frictionStatic: 0.1,
            isStatic: true,
            render: {
              fillStyle: '#0000FF',
              strokeStyle: '#0000FF',
              lineWidth: 3
            }
          });

          this.body.gameColor = {red: 0.0, blue: 1.0, green: 0.0}


          this.body.gameObject = this;
          this.world = world;
          World.add(world, this.body);
      }
}


module.exports = Wall;
