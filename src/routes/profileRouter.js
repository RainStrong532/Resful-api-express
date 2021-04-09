'use strict';

const express = require('express');
const router = express.Router();

const profileController = require('../controllers/ProfileController');

const {getProfiles, getProfileById, createProfile, updateProfile, deleteProfile} = profileController;

router.get('/profiles', getProfiles);

router.get('/profile/:id', getProfileById);

router.post('/profile', createProfile);

router.put('/profile/:id', updateProfile);

router.delete('/profile/:id', deleteProfile);

module.exports = {
    routes: router
}