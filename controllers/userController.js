import { User } from "../models/userModel.js";

export const create = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const createdUser = await User.create({ name, email, password });
        if (!createdUser) {
            res.status(404).json({ success: false, message: "Failed to create user!" });
        }
        res.status(200).json({ success: true, message: "User created successfully..", createdUser })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error!" })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (!users) {
            res.status(404).json({ success: false, message: "No user found!" })
        }
        res.status(200).json({ success: true, message: "Users fetched successfully..", users });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error!" })
    }
}

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateUser) {
            res.status(400).json({ success: false, message: "Failed to update user!" });
        }
        res.status(200).json({ success: true, message: "User updated successfully..", updateUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error!" });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            res.status(400).json({ success: false, message: "Failed to delete user!" })
        }
        res.status(200).json({ success: true, message: "User deleted successfully...", deletedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error!" });
    }
}

export const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            res.status(404).json({ success: false, message: "User not found!" })
        }
        res.status(200).json({ success: true, message: "User fetched successfully...", user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error!" });
    }
}
