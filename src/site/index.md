---
title: Restaurants offering free meals to children
layout: default
---

<div class="restaurants">
  <div class="restaurants__column">
    <ul class="listing">
      {%- for item in sheet.content -%}
        <li>
          <strong>{{ item.name }}, {{ item.location }}</strong>
          <span>{% if item.twitterhandle %}<a href="https://twitter.com/{{ item.twitterhandle }}" target="_blank">Twitter</a>, {% endif %}{% if item.instagramhandle %}<a href="https://instagram.com/{{ item.instagramhandle }}" target="_blank">Instagram</a>, {% endif %}{% if item.facebookhandle %}<a href="https://facebook.com/{{ item.facebookhandle }}" target="_blank">Facebook</a>, {% endif %} {% if item.phonenumber %}<a href="tel:{{ item.phonenumber }}">Telephone</a>{% endif %}</span>
        </li>
      {%- endfor -%}
    </ul>
  </div>
</div>

A quick [Eleventy](https://www.11ty.io/) project built by [Spencer Haizel](https://twitter.com/spenncerr) inspired by [Andy Bell](https://twitter.com/hankchizljaw) with data collected by various methods.