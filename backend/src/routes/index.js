// create router to handle requests

const express = require('express');

function createRouter(db) {
  const router = express.Router();

  router.post('/events', (req, res, next) => {
    
    db.query(
      'INSERT INTO events (startTime) VALUES (?)',
      [req.body.startTime],
      (error) => {        
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });
  router.get('/events', (req, res, next) => {
    
    db.query(
      'SELECT * from events',      
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });
  router.put('/events/:id', (req, res, next) => {
    
    db.query(
      'UPDATE events SET eventName = ?, homeWin = ?, draw = ?, awayWin = ?, startTime = ? WHERE eventID = ?',
      [req.body.eventName, req.body.homeWin, req.body.draw, req.body.awayWin, req.body.startTime, req.params.id],      
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });
  router.delete('/events/:id', function (req, res, next) {
   
    db.query(
      'DELETE FROM events WHERE eventID=?',
      [req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;
