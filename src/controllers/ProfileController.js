'use strict';

const profileData = require('../data/profiles');

const getProfiles = async (req, res, next) => {
    try{
        const events  = await profileData.getProfiles();
        res.send(events);
    }catch(err){
        res.status(400).send(err.message);
    }
}
const getProfileById = async (req, res, next) => {
    try{
        const profileId = req.params.id;
        if(profileId){
        const event  = await profileData.getProfileById(profileId);
        res.send(event);
        }else{
            res.send({message: 'Id is invalid'});
        }
    }catch(err){
        res.status(400).send(err.message);
    }
}
const createProfile =  async (req, res, next) => {
    try{
        const data = req.body;
        const created = await profileData.createProfile(data);
        res.send(created);
    }catch(err){
        res.status(400).send(err.message);
    }
}

const updateProfile =  async (req, res, next) => {
    try{
        const data = req.body;
        data.PersonId = req.params.id;
        const updated = await profileData.updateProfile(data);
        res.send(updated);
    }catch(err){
        res.status(400).send(err.message);
    }
}

const deleteProfile =  async (req, res, next) => {
    try{
        const PersonId = req.params.id;
        const deleted = await profileData.deleteProfile(PersonId);
        res.send(deleted);
    }catch(err){
        res.status(400).send(err.message);
    }
}

module.exports = {
    getProfiles,
    getProfileById,
    createProfile,
    updateProfile,
    deleteProfile
}
