const port = 8080;
const express = require('express');
const app = express();
const axios = require('axios');
var bodyParser = require('body-parser');
const qs = require('qs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getPromotions = async (req, res) => {
    const result = await axios.get('http://localhost:8081/promotions');
    res.json(result.data);
}
const getStories = async (req, res) => {
    const result1 = await axios.get('http://localhost:8082/stories');
    res.json(result1.data);
}


const postPromotions = async (req, res) => {
    try {
        var data = {
            'title': req.body.title,
            'name': req.body.name,
            'caption': req.body.caption,
            'category_id': req.body.category_id,
            'cover_url': req.body.cover_url,
            'creator_id': req.body.creator_id,
            'description': req.body.description,
            'province_target': req.body.province_target,
            'city_taget': req.body.city_taget,
            'rejected_message': req.body.rejected_message,
            'reviewer_id': req.body.reviewer_id,
            'status': req.body.status,
            'total_clicks': req.body.total_clicks,
            'total_views': req.body.total_views
        }
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: 'http://localhost:8081/promotions/create'
        };
        let result = await axios(options);
        res.json(result.data);
    } catch (error) {
        res.json(error)
    }
}

const postStories = async (req, res) => {
    try {
        var data = {
            'title': req.body.title,
            'name': req.body.name,
            'caption': req.body.caption,
            'thumbnail_name': req.body.thumbnail_name,
            'thumbnail_url': req.body.thumbnail_url,
            'category_id': req.body.category_id,
            'cover_url': req.body.cover_url,
            'creator_id': req.body.creator_id,
            'description': req.body.description,
            'province_target': req.body.province_target,
            'city_taget': req.body.city_taget,
            'rejected_message': req.body.rejected_message,
            'reviewer_id': req.body.reviewer_id,
            'status': req.body.status,
            'is_commercial': req.body.is_commercial,
            'likes': req.body.likes,
            'linked_property_id': req.body.linked_property_id,
            'total_clicks': req.body.total_clicks,
            'total_views': req.body.total_views
        }
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: 'http://localhost:8082/stories/create'
        };
        let result = await axios(options);
        res.json(result.data);
    } catch (error) {
        res.json(error)
    }
}

const putPromotions = async (req, res) => {
    try {
        const id = req.params.id
        var data = {
            'title': req.body.title,
            'name': req.body.name,
            'caption': req.body.caption,
            'category_id': req.body.category_id,
            'cover_url': req.body.cover_url,
            'creator_id': req.body.creator_id,
            'description': req.body.description,
            'province_target': req.body.province_target,
            'city_taget': req.body.city_taget,
            'rejected_message': req.body.rejected_message,
            'reviewer_id': req.body.reviewer_id,
            'status': req.body.status,
            'total_clicks': req.body.total_clicks,
            'total_views': req.body.total_views
        }
        const options = {
            method: 'PUT',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: 'http://localhost:8081/promotions/update/' + id
        };
        let result = await axios(options);
        res.json(result.data);
    } catch (error) {
        res.json(error)
    }
}

const putStories = async (req, res) => {
    try {
        const id = req.params.id
        var data = {
            'title': req.body.title,
            'name': req.body.name,
            'caption': req.body.caption,
            'thumbnail_name': req.body.thumbnail_name,
            'thumbnail_url': req.body.thumbnail_url,
            'category_id': req.body.category_id,
            'cover_url': req.body.cover_url,
            'creator_id': req.body.creator_id,
            'description': req.body.description,
            'province_target': req.body.province_target,
            'city_taget': req.body.city_taget,
            'rejected_message': req.body.rejected_message,
            'reviewer_id': req.body.reviewer_id,
            'status': req.body.status,
            'is_commercial': req.body.is_commercial,
            'likes': req.body.likes,
            'linked_property_id': req.body.linked_property_id,
            'total_clicks': req.body.total_clicks,
            'total_views': req.body.total_views
        }
        const options = {
            method: 'PUT',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: 'http://localhost:8082/stories/update/' + id
        };
        let result = await axios(options);
        res.json(result.data);
    } catch (error) {
        res.json(error)
    }
}

const delPromotions = async (req, res) => {
    try {
        const id = req.params.id
        const options = {
            method: 'DELETE',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: 'http://localhost:8081/promotions/delete/' + id
        };
        let result = await axios(options);
        res.json(result.data);
    } catch (error) {
        res.json(error)
    }
}

const delStories = async (req, res) => {
    try {
        const id = req.params.id
        const options = {
            method: 'DELETE',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: 'http://localhost:8082/stories/delete/' + id
        };
        let result = await axios(options);
        res.json(result.data);
    } catch (error) {
        res.json(error)
    }
}

//cars
app.get('/promotions', getPromotions);
app.post('/promotions/create', postPromotions);
app.put('/promotions/update/:id', putPromotions);
app.delete('/promotions/delete/:id', delPromotions);

//trucks
app.get('/stories', getStories);
app.post('/stories/create', postStories);
app.put('/stories/update/:id', putStories);
app.delete('/stories/delete/:id', delStories);

app.listen(port, () => console.log("Gateway listening on port " + port));