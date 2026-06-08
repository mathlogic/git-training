import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "backend"))

from app.main import _derive_git_username


class GitIdentityTests(unittest.TestCase):
    def test_prefers_git_username_when_name_is_already_a_username(self):
        self.assertEqual(
            _derive_git_username("shivangisinha-fnmathlogic", "shivangisinha@fnmathlogic.com"),
            "shivangisinha-fnmathlogic",
        )


if __name__ == "__main__":
    unittest.main()
