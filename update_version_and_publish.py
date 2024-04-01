import json
import subprocess
import os

def update_version():
    # Read package.json
    with open('package.json', 'r') as file:
        package_data = json.load(file)

    # Increment version
    version_parts = package_data['version'].split('.')
    version_parts[-1] = str(int(version_parts[-1]) + 1)
    new_version = '.'.join(version_parts)

    # Update package.json with new version
    package_data['version'] = new_version
    with open('package.json', 'w') as file:
        json.dump(package_data, file, indent=2)

    return new_version

def publish_npm():
    # Execute npm publish --access public
    subprocess.run(['npm', 'publish', '--access', 'public'], check=True)

def main():
    # Check if running in prepublish phase
    if 'npm_config_argv' in os.environ:
        npm_argv = json.loads(os.environ['npm_config_argv'])
        if 'prepublish' in npm_argv['original']:
            return

    new_version = update_version()
    print(f"Updated version to {new_version}")
    publish_npm()

if __name__ == "__main__":
    main()