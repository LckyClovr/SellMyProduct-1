/*
  Warnings:

  - Made the column `headline` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subheadline` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `call_to_action` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sales1` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sales2` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sales3` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `color` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prompt` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `headline` TEXT NOT NULL,
    MODIFY `subheadline` TEXT NOT NULL,
    MODIFY `call_to_action` TEXT NOT NULL,
    MODIFY `sales1` TEXT NOT NULL,
    MODIFY `sales2` TEXT NOT NULL,
    MODIFY `sales3` TEXT NOT NULL,
    MODIFY `color` TEXT NOT NULL,
    MODIFY `prompt` TEXT NOT NULL;
