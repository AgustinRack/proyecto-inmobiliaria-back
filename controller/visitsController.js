const { Properties, Visits, Users } = require("../models");

const saveVisit = async (req, res) => {
  try {
    const { userEmail, propertyId, date, schedule } = req.body;
    const user = await Users.findOne({ where: { email: userEmail } });
    await Visits.create({
      date: date,
      schedule: schedule,
      userId: user.id,
      propertyId: propertyId,
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(404);
  }
};

const getPropertyVisits = async (req, res) => {
  try {
    const propertyId = req.params.id;

    const visits = await Visits.findAll({ where: { propertyId: propertyId } });

    res.status(200).send(visits);
  } catch (error) {
    res.status(404);
  }
};

module.exports = { saveVisit, getPropertyVisits };
