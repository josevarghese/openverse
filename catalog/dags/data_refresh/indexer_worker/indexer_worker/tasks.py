"""Simple in-memory tracking of executed tasks."""

import datetime


class TaskTracker:
    def __init__(self):
        self.tasks = {}

    def add_task(self, task_id: str, **kwargs):
        """
        Store information about a new task in memory.

        :param task: the task being performed
        :param task_id: the UUID of the task
        """
        self.tasks[task_id] = {
            "start_time": datetime.datetime.utcnow().timestamp(),
        } | kwargs

    def get_task_status(self, task_id: str) -> dict:
        """
        Get the status of a single task with the given task ID.

        :param task_id: the ID of the task to get the status for
        :return: response dictionary containing all relevant info about the task
        """

        def _time_fmt(timestamp: int) -> str | None:
            """
            Format the timestamp into a human-readable date and time notation.

            :param timestamp: the timestamp to format
            :return: the human-readable form of the timestamp
            """

            if timestamp == 0:
                return None
            return str(datetime.datetime.utcfromtimestamp(timestamp))

        task_info = self.tasks[task_id]
        active = task_info["task"].is_alive()
        model = task_info["model"]
        start_time = task_info["start_time"]
        finish_time = task_info["finish_time"].value
        progress = task_info["progress"].value

        return {
            "task_id": task_id,
            "active": active,
            "model": model,
            "progress": progress,
            "start_time": _time_fmt(start_time),
            "finish_time": _time_fmt(finish_time),
            # The task is considered to have errored if the task is no longer alive,
            # but progress did not reach 100%. This can happen if an individual chunk
            # of records fails to upload to ES.
            "error": progress < 100 and not active,
        }
