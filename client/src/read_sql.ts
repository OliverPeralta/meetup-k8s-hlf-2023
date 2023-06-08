//import { Database } from 'sqlite3';
import sqlite3 from "sqlite3";

var dbFile = "data/Wateroam_20220719.db";

const db = new sqlite3.Database(dbFile);
